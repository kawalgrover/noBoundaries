'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('noBoundariesApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('create/register', {
        templateUrl: 'views/registration-add.html',
        controller: 'RegistrationAddCtrl'
      })
      .when('/register/:id', {
        templateUrl: 'views/registration-view.html',
        controller: 'RegistrationViewCtrl'
      })
      .when('/register/:id/delete', {
        templateUrl: 'views/registration-delete.html',
        controller: 'RegistrationDeleteCtrl'
      })
      .when('/register/:id/edit', {
        templateUrl: 'views/registration-edit.html',
        controller: 'RegistrationEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('RegisterRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Register', function(RegisterRestangular) {
    return RegisterRestangular.service('register');

  });
