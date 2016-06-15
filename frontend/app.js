angular.module('appTareas', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('alta', {
      url: '/alta',
      templateUrl: 'views/alta.html'
    })
    .state('editar', {
      url: '/editar/{id}',
      templateUrl: 'views/editar.html'
    })
    $urlRouterProvider.otherwise('alta');
  })
