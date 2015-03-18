/* 
    @uthor: Guillermo David Paredes Torrez
    Contact: gdavid.ptorrez@gmail.com
    skype : Guillermo Paredes gdavid_ptorrez@hotmail.com
*/
var app = angular.module("myApp",[]);

app.controller("ControladorTareas", function($scope){
    $scope.tareas = [
        {texto : "Aprendiendo Angular JS" , hecho: true},
        {texto : "Aprende Trabaja Desarrolla" , hecho: false}];
    
    $scope.agregarTarea = function(){
        $scope.tareas.push(
            {texto : $scope.textoNuevoTarea , hecho : false}
            );
          $scope.textoNuevoTarea = "";
    };
    
    $scope.restantes = function(){
        var cuenta = 0;
        angular.forEach($scope.tareas, function(tarea){
            cuenta += tarea.hecho ? 0 : 1;
        });
        return cuenta;
    }
    
  
});
