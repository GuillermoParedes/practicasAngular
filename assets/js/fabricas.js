/* 
    @uthor: Guillermo David Paredes Torrez
    Contact: gdavid.ptorrez@gmail.com
    skype : Guillermo Paredes gdavid_ptorrez@hotmail.com
*/

var app = angular.module("myApp", []);

app.controller('ControladorUno', function($scope){
    $scope.dato = { mensaje : 'Saludos desde el controlador UNO'};
});

app.controller('ControladorDos', function($scope){
    $scope.dato = { mensaje : 'Saludos desde el controlador DOS'};
});
