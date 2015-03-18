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
    }
  
});
/*
app.module("agregarTarea", function($scope){
    $scope.tareas.push({texto : $scope.textoNuevoTarea, hecho . false});
    $scope.textoNuevaTarea= '';
});
*/