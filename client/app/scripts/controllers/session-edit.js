'use strict';

/**
 * @ngdoc function
 * @name noBoundariesApp.controller:SessionEditCtrl
 * @description
 * # SessionEditCtrl
 * Controller of the noBoundariesApp
 */
app.controller('SessionEditCtrl', function ($scope, $stateParams, Sessions, $location) {
    $scope.editSession = true;
    $scope.session = {};

    Sessions.one($stateParams.id).get().then(function(session) {
        $scope.session = session;
        $scope.saveEvent = function() {
            $scope.session.save().then(function() {
                $location.path('/sessions/' + $stateParams.id);
            });
        };
    });
  });
