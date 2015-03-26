'use strict';

/**
 * @ngdoc function
 * @name noBoundariesApp.controller:SessionsAddCtrl
 * @description
 * # SessionsAddCtrl
 * Controller of the noBoundariesApp
 */
app.controller('SessionsAddCtrl', function ($scope, Sessions, $location) {
    $scope.session = {};
    $scope.save = function(){
        Sessions.post($scope.session).then(function(){
            $location.path('/sessions');
        });
    };
  });
