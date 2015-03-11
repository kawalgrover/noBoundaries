'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the clientApp
 */
angular.module('noBoundariesApp')
  .controller('RegisterCtrl', function ($scope, Register) {
    $scope.registrations = Register.getList().$object;
  });
