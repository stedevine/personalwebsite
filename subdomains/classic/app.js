var app = angular.module('app', ['ui.router']);

app.config(
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('hello', {
      url: "/",
      templateUrl: 'views/hello.html',
    })

    .state('about', {
      url: "/about",
      templateUrl: 'views/about.html',
    })

    .state('experience', {
      url: "/experience",
      templateUrl: 'views/experience.html',
    })
  });
