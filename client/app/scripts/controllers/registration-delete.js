'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RegistrationDeleteCtrl
 * @description
 * # RegistrationDeleteCtrl
 * Controller of the clientApp
 */
app.controller('RegistrationDeleteCtrl', function ($scope, $routeParams, Register, $location) {

    $scope.registration = Register.One($routeParams.id).get().$object;

    $scope.deleteRegistration = function(){
        $scope.registration.remove().then(function() {
            $location.path('/register');
        });
    };

    $scope.back = function() {
        $location.path('/register/' + $routeParams.id);
    };

  });
