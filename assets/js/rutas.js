angular.module('myApp',['ngRoute'])

.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl : 'assets/modulos/inicio.html'
        })
        .when('/tareas', {
            templateUrl : 'assets/modulos/tareas.html'
        })
        .when('/empleados', {
            templateUrl : 'assets/modulos/empleados.html'
        })
        .otherwise({
            redirectTo : '/'
        })
    
})