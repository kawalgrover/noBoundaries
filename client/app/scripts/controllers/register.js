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
    console.log('RegisterCtrl init');
    $scope.registrations = Register.getList().$objects;

  });
