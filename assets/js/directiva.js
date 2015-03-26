angular.module('myApp', [])
/*
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
    }
})*/
.controller('Controlador', function($scope){
    $scope.texto1 = {
     titulo : 'FULL STACK',
        subtitulo : 'aprendiendo javascript'
    };
    $scope.texto2 = {
        titulo : 'MEAN',
        subtitulo : 'Javascript'
    };
})
.directive('miEncabezado', function(){
    return {
        restrict : 'E',
        scope : {
            textoVariable : '=texto'
        },
        templateUrl : 'assets/modulos/mi-encabezado.html'
    };
})