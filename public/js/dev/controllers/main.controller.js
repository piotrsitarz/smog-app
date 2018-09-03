'use strict';

angular.module('smogApp')

    .controller('main', ['$scope','chart','mainModel','googleMap', function($scope,chart,mainModel,googleMap) {

      $scope.chart = chart;
      $scope.mainModel = mainModel;
      $scope.googleMap = googleMap;

    }]);
