'use strict';

angular.module('ngFundApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/common/views/main.html',
        controller: 'ngFundAppController'
      })
      .otherwise({
        redirectTo: '/404.html',
        templateUrl: 'src/common/views/404.html'
      });
  });
