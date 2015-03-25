'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the clientApp
 */
app.controller('RegisterCtrl', function ($scope, Register) {
    $scope.registrations = Register.getList().$object;
  });
