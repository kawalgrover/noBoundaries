'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:headerController
 * @description
 * # headerController
 * headerController of the clientApp
 */
app.controller('headerController', function ($scope,sessionService) {
	$scope.role = 'public'; // public user admin
	sessionService.setRole($scope.role);
  });
