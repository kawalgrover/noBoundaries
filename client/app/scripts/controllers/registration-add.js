'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RegistrationAddCtrl
 * @description
 * # RegistrationAddCtrl
 * Controller of the clientApp
 */
angular.module('noBoundariesApp')
  .controller('RegistrationAddCtrl', function ($scope, Register, $location) {
    $scope.registration = {};
    $scope.saveRegistration = function(){
        Register.post($scope.registration).then(function() {
            $location.path('/register');
        });
    };
  });
