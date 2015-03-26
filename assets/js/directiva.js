angular.module('myApp', [])

.controller('Controlador1', function($scope){
    $scope.texto = {
        titulo : 'CONTROLADOR 1',
        subtitulo : 'aprendiendo php'
    };
})
.controller('Controlador2', function($scope){
    $scope.texto = {
        titulo : 'CONTROLADOR 2',
        subtitulo : 'aprendiendo javascript'
    };
})
.directive('miEncabezado', function(){
    return {
        restrict : 'E',
        templateUrl : 'assets/modulos/mi-encabezado.html'
    };
})