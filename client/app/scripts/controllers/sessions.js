'use strict';

/**
 * @ngdoc function
 * @name noBoundariesApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the noBoundariesApp
 */
app.controller('SessionsCtrl', function ($scope, Sessions) {
    $scope.sessions = Sessions.getList().$object;
  });
