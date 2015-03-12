'use strict';

describe('Controller: EventsAddCtrl', function () {

  // load the controller's module
  beforeEach(module('noBoundariesApp'));

  var EventsAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventsAddCtrl = $controller('EventsAddCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
