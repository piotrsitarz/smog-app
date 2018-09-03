'use strict';
var app = angular.module('smogApp', ['ngMessages','ngMaterial','ngRoute','nvd3'])

  .config(['$routeProvider','$locationProvider','$sceProvider', function ($routeProvider,$locationProvider,$sceProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider.
        when('/', {
          templateUrl: '/views/main.html',
          controller: 'main'
        }).
        when('/main', {
          templateUrl: '/views/main.html',
          controller: 'main'
        }).
        otherwise({
          redirectTo: '/'
        });

    $sceProvider.enabled(false);

  }]);
