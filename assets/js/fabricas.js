/* 
    @uthor: Guillermo David Paredes Torrez
    Contact: gdavid.ptorrez@gmail.com
    skype : Guillermo Paredes gdavid_ptorrez@hotmail.com
*/

var app = angular.module("myApp", []);
app.factory('Dato',function(){
    return {mensaje : 'Saludos desde la Fabrica'}
});
app.controller('ControladorUno', function($scope, Dato){
    $scope.dato = Dato;
});

app.controller('ControladorDos', function($scope,Dato){
   $scope.dato = Dato;
});


