'use strict';

describe('Controller: EventDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('noBoundariesApp'));

  var EventDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventDeleteCtrl = $controller('EventDeleteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
