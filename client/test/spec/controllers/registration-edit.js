'use strict';

describe('Controller: RegistrationEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var RegistrationEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistrationEditCtrl = $controller('RegistrationEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
