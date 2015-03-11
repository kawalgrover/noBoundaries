'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RegistrationEditCtrl
 * @description
 * # RegistrationEditCtrl
 * Controller of the clientApp
 */
angular.module('noBoundariesApp')
  .controller('RegistrationEditCtrl', function ($scope, $routeParams, Register, $location) {
    $scope.editRegistration = true;
    $scope.registration = {};
    Register.one($routeParams.id).get().then(function(registration) {
        $scope.registration = registration;
        $scope.saveRegistration = function() {
            $scope.registration.save().then(function() {
                $location.path('/register/' + $routeParams.id);
            });
        };
    });
  });
