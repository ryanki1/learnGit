/**
 * Created by ryanki10 on 14/05/15.
 */

'use strict';

describe('cdashboard', function(){
  var scope, ctrlService, backend;
  beforeEach(module('swiip'));
  beforeEach(inject(['$rootScope', '$httpBackend', '$controller', function($rootScope, $httpBackend, $controller){
    scope = $rootScope.$new();
    ctrlService = $controller;
    backend = $httpBackend;
  }]));
  it('pig returned', function(){
    var ctrl;
    scope.data = 'dog';
    backend.expectGET('/data').respond('pig');
    ctrl = ctrlService('CDashboard', {$scope: scope});
    backend.flush();
    expect(scope.data).toBe('pig');
  });
  afterEach(function(){
    backend.verifyNoOutstandingExpectation();
  });
});
