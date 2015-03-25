'use strict';

/**
 * @ngdoc function
 * @name noBoundariesApp.controller:RegistrationEditCtrl
 * @description
 * # RegistrationEditCtrl
 * Controller of the noBoundariesApp
 */
app.controller('RegistrationEditCtrl', function ($scope, $routeParams, Register, $location) {
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
