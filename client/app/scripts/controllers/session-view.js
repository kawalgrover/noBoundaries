'use strict';

/**
 * @ngdoc function
 * @name noBoundariesApp.controller:EventViewCtrl
 * @description
 * # EventViewCtrl
 * Controller of the noBoundariesApp
 */
app.controller('SessionViewCtrl', function ($scope, $stateParams, Sessions) {
    $scope.viewSession = true;
    $scope.session = Sessions.one($stateParams.id).get().$object;
  });
