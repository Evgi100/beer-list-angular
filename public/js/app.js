var app = angular.module('beerList', ['ui.router']);

app.filter('percentage', ['$filter', function ($filter) {
    return function (input, decimals) {
      return $filter('number')(input, decimals) + '%';
    };
  }]);

  app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'mainController',
        templateUrl: '/templates/home.html'
      })
      .state('beer', {
        url: '/beer/:id',
        templateUrl: '/templates/beer.html',
        controller: 'beerController',
        params:{beerParam:null}
      });
  
    $urlRouterProvider.otherwise('/home');
  }]);
