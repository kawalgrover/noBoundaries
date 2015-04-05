'use strict';

/**
 * @ngdoc function
 * @name noBoundariesApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the noBoundariesApp
 */
app.controller('SessionsCtrl', function ($scope, Sessions, sessionService) {
	$scope.role = sessionService.getRole();
	console.log($scope.role);
    $scope.sessions = Sessions.getList().$object;
  });
