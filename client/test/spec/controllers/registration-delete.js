'use strict';

describe('Controller: RegistrationDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var RegistrationDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistrationDeleteCtrl = $controller('RegistrationDeleteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
