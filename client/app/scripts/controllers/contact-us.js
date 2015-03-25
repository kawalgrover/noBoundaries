'use strict';

/**
 * @ngdoc function
 * @name noBoundariesApp.controller:ContactUsCtrl
 * @description
 * # ContactUsCtrl
 * Controller of the noBoundariesApp
 */
app.controller('ContactUsCtrl', function ($scope, Contact, $location) {
    $scope.contact = {};
    $scope.saveFeedback = function(){
        Contact.post($scope.contact).then(function(){
            $location.path('/');
        });
    };
  });
