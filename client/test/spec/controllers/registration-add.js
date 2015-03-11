'use strict';

describe('Controller: RegistrationAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var RegistrationAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistrationAddCtrl = $controller('RegistrationAddCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
