'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
var app = angular
  .module('noBoundariesApp', [
    'ui.router',
    'ui.bootstrap',
    'restangular'
  ])
  .config(function ($stateProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        data: {
          requireLogin: false
        }
      })
      .state('home.about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        data: {
          requireLogin: false
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginModalCtrl',
        data: {
          requireLogin: false
        }
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        data: {
          requireLogin: true
        }
      })
      .state('register.create', {
        url: 'create/register',
        templateUrl: 'views/registration-add.html',
        controller: 'RegistrationAddCtrl',
        data: {
          requireLogin: true
        }
      })
      .state('register.view', {
        url: '/register/:id',
        templateUrl: 'views/registration-view.html',
        controller: 'RegistrationViewCtrl',
        data: {
          requireLogin: true
        }
      })
      .state('register.delete', {
        url: '/register/:id/delete',
        templateUrl: 'views/registration-delete.html',
        controller: 'RegistrationDeleteCtrl',
        data: {
          requireLogin: true
        }
      })
      .state('register.edit', {
        url: '/register/:id/edit',
        templateUrl: 'views/registration-edit.html',
        controller: 'RegistrationEditCtrl',
        data: {
          requireLogin: true
        }
      })
      .state('events', {
        url: '/events',
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl',
        data: {
          requireLogin: false
        }
      })
      .state('events.create', {
        url: '/create/events',
        templateUrl: 'views/events-add.html',
        controller: 'EventsAddCtrl',
        data: {
          requireLogin: true
        }
      })
      .state('events.view', {
        url: '/events/:id',
        templateUrl: 'views/event-view.html',
        controller: 'EventViewCtrl',
        data: {
          requireLogin: false
        }
      })
      .state('events.delete', {
        url: '/events/:id/delete',
        templateUrl: 'views/event-delete.html',
        controller: 'EventDeleteCtrl',
        data: {
          requireLogin: true
        }
      })
      .state('events.edit', {
        url: '/events/:id/edit',
        templateUrl: 'views/event-edit.html',
        controller: 'EventEditCtrl',
        data: {
          requireLogin: true
        }
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'ContactUsCtrl',
        data: {
          requireLogin: false
        }
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
  })
  .factory('User', function(RegisterRestangular){
    return RegisterRestangular.service('user');
  });



app.service('loginModal', function ($modal, $rootScope) {

  function assignCurrentUser (user) {
    $rootScope.currentUser = user;
    return user;
  }

  return function() {
    var instance = $modal.open({
      templateUrl: 'views/login.html',
      controller: 'LoginModalCtrl',
      controllerAs: 'LoginModalCtrl'
    })

    return instance.result.then(assignCurrentUser);
  };
});


app.config(function ($httpProvider) {

  $httpProvider.interceptors.push(function ($timeout, $q, $injector) {
    var loginModal, $http, $state;

    // this trick must be done so that we don't receive
    // `Uncaught Error: [$injector:cdep] Circular dependency found`
    $timeout(function () {
      loginModal = $injector.get('loginModal');
      $http = $injector.get('$http');
      $state = $injector.get('$state');
    });

    return {
      responseError: function (rejection) {
        if (rejection.status !== 401) {
          return rejection;
        }

        var deferred = $q.defer();

        loginModal()
          .then(function () {
            deferred.resolve( $http(rejection.config) );
          })
          .catch(function () {
            $state.go('home');
            deferred.reject(rejection);
          });

        return deferred.promise;
      }
    };
  });

});


app.run(function($rootScope, $state, loginModal) {

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    var requireLogin = toState.data.requireLogin;

    if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
      event.preventDefault();

      loginModal()
        .then(function () {
          return $state.go(toState.name, toParams);
        })
        .catch(function() {
          return $state.go('home')
        })
    }
  });
});
