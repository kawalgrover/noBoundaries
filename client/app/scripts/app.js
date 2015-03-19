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
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl'
      })
      .when('/create/events', {
        templateUrl: 'views/events-add.html',
        controller: 'EventsAddCtrl'
      })
      .when('/events/:id', {
        templateUrl: 'views/event-view.html',
        controller: 'EventViewCtrl'
      })
      .when('/events/:id/delete', {
        templateUrl: 'views/event-delete.html',
        controller: 'EventDeleteCtrl'
      })
      .when('/events/:id/edit', {
        templateUrl: 'views/event-edit.html',
        controller: 'EventEditCtrl'
      })
      .when('//events/:id/delete', {
        templateUrl: 'views/events-delete.html',
        controller: 'EventsDeleteCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact-us.html',
        controller: 'ContactUsCtrl'
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

  })
  .factory('Events', function(RegisterRestangular){
    return RegisterRestangular.service('events');
  })
  .factory('Contact', function(RegisterRestangular){
    return RegisterRestangular.service('contact');
  });
