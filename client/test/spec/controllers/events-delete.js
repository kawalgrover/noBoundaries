'use strict';

describe('Controller: EventsDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('noBoundariesApp'));

  var EventsDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventsDeleteCtrl = $controller('EventsDeleteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
