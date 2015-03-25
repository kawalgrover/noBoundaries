'use strict';

/**
 * @ngdoc function
 * @name noBoundariesApp.controller:EventEditCtrl
 * @description
 * # EventEditCtrl
 * Controller of the noBoundariesApp
 */
app.controller('EventEditCtrl', function ($scope, $routeParams, Events, $location) {
    $scope.editEvent = true;
    $scope.event = {};

    Events.one($routeParams.id).get().then(function(event) {
        $scope.event = event;
        $scope.saveEvent = function() {
            $scope.event.save().then(function() {
                $location.path('/events/' + $routeParams.id);
            });
        };
    });
  });
