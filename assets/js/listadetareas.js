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

});
