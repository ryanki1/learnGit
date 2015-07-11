'use strict';

describe('controllers', function () {
  var scope, controller, timeout;

  beforeEach(function(done){
    module('swiip');
    done();
  });

  beforeEach(function (done) {
    inject(function ($rootScope, $controller, $timeout) {
      scope = $rootScope.$new();
      controller = $controller;
      timeout = $timeout;
      env.jasmine.timeoutDelay_ = 20000;
      done();
    });
  });

  xit('should define more than 5 awesome things', function (done) {
    expect(scope.awesomeThings).toBeUndefined();
    controller('MainCtrl', {
      $scope: scope
    });
    spyOn(scope, 'fnToTest');
    timeout(scope.fnToTest, 2000)
      .then(function (result) {
        expect(scope.fnToTest).toHaveBeenCalled();
        expect(angular.isArray(scope.awesomeThings)).toBeTruthy();
        expect(scope.awesomeThings.length > 5).toBeTruthy();
      })
      .finally(function(){
        done();
      });
  }, 20000);
});
