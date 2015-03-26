/* 
    @uthor: Guillermo David Paredes Torrez
    Contact: gdavid.ptorrez@gmail.com
    skype : Guillermo Paredes gdavid_ptorrez@hotmail.com
*/

var app = angular.module("myApp", []);
app.factory('Fabrica',function(){
    var servicio = {
        objecto : { mensaje : 'Saludos desde la fabrica'},
        msjInicial : function(){
            servicio.objecto['mensaje'] = 'Saludos desde la fabrica';
        },
        msjNuevo : function(msj){
            servicio.objecto.mensaje = msj;
        }
    };
    
    return servicio;
});
app.controller('ControladorUno', function($scope, Fabrica){
    $scope.nuevo = function(){
        Fabrica.msjNuevo($scope.nuevoMensaje);
    }
    
    $scope.dato = Fabrica.objecto;
});

app.controller('ControladorDos', function($scope,Fabrica){
   $scope.nuevo = function(){
        Fabrica.msjNuevo($scope.nuevoMensaje);
    }
    $scope.dato = Fabrica.objecto;
});

app.controller('ControladorTres', function($scope, Fabrica){
    $scope.resetear = function(){
        Fabrica.msjInicial();
    }
    
});
//av montenegro edif loyanda e8 piso 1 oficina 1 18 calacoto 3 