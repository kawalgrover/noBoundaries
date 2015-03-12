'use strict';

/**
 * @ngdoc function
 * @name noBoundariesApp.controller:EventDeleteCtrl
 * @description
 * # EventDeleteCtrl
 * Controller of the noBoundariesApp
 */
angular.module('noBoundariesApp')
  .controller('EventDeleteCtrl', function ($scope, $routeParams, Events, $location) {

    $scope.event = Events.One($routeParams.id).get().$object;

    $scope.deleteEvent = function(){
        $scope.event.remove().then(function() {
            $location.path('/events');
        });
    };

    $scope.back = function() {
        $location.path('/events/' + $routeParams.id);
    };

  });
