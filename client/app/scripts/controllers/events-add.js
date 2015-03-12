'use strict';

/**
 * @ngdoc function
 * @name noBoundariesApp.controller:EventsAddCtrl
 * @description
 * # EventsAddCtrl
 * Controller of the noBoundariesApp
 */
angular.module('noBoundariesApp')
  .controller('EventsAddCtrl', function ($scope, Events, $location) {
    $scope.event = {};
    $scope.saveEvent = function(){
        Events.post($scope.event).then(function(){
            $location.path('/events');
        });
    };
  });
