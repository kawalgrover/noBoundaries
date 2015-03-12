'use strict';

/**
 * @ngdoc function
 * @name noBoundariesApp.controller:EventViewCtrl
 * @description
 * # EventViewCtrl
 * Controller of the noBoundariesApp
 */
angular.module('noBoundariesApp')
  .controller('EventViewCtrl', function ($scope, $routeParams, Events) {
    $scope.viewEvent = true;
    $scope.event = Events.one($routeParams.id).get().$object;
  });
