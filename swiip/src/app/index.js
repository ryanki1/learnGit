'use strict';

angular.module('swiip', [
                          'ngSanitize',
                          'ngRoute',
                          'ngMaterial',
                          'ngAria',
                          'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/tabs', {
        templateUrl: 'app/main/tabs.html',
        controller: 'TabsCtrl'
      })
      .when('/master', {
        templateUrl: 'app/main/goToMaster.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
