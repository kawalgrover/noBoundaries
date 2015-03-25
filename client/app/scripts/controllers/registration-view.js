'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RegistrationViewCtrl
 * @description
 * # RegistrationViewCtrl
 * Controller of the clientApp
 */
app.controller('RegistrationViewCtrl', function ($scope, $routeParams, Register) {
    $scope.viewRegistration = true;
    $scope.registration = Register.one($routeParams.id).get().$object;
  });
