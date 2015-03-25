'use strict';

/**
 * @ngdoc function
 * @name noBoundariesApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the noBoundariesApp
 */
app.controller('EventsCtrl', function ($scope, Events) {
    $scope.events = Events.getList().$object;
  });
