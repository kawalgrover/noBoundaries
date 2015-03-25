'use strict';

/**
 * @ngdoc function
 * @name noBoundariesApp.controller:EventViewCtrl
 * @description
 * # EventViewCtrl
 * Controller of the noBoundariesApp
 */
app.controller('SessionViewCtrl', function ($scope, $routeParams, Sessions) {
    $scope.viewSession = true;
    $scope.session = Sessions.one($routeParams.id).get().$object;
  });
