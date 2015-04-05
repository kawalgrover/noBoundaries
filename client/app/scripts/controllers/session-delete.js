'use strict';

/**
 * @ngdoc function
 * @name noBoundariesApp.controller:SessionsDeleteCtrl
 * @description
 * # SessionsDeleteCtrl
 * Controller of the noBoundariesApp
 */
app.controller('SessionsDeleteCtrl', function ($scope, $stateParams, Sessions, $location) {

    Sessions.one($stateParams.id).get().then(function(session) {
        $scope.session = session;
        $scope.deleteSession = function(){
            $scope.session.remove().then(function() {
                $location.path('/sessions');
            });
        };

        $scope.back = function() {
            $location.path('/sessions/' + $stateParams.id);
        };
    });

  });
