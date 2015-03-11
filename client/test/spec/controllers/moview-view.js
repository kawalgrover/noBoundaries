'use strict';

describe('Controller: MoviewViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MoviewViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoviewViewCtrl = $controller('MoviewViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
