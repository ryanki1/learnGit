'use strict';

angular.module('swiip')
  .controller('MainCtrl', function ($scope, $q, $timeout) {
    $scope.awesomeThings = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      },
      {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      },
      {
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      },
      {
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      },
      {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      },
      {
        'title': 'Angular Material Design',
        'url': 'https://material.angularjs.org/#/',
        'description': 'The Angular reference implementation of the Google\'s Material Design specification.',
        'logo': 'angular-material.png'
      },
      {
        'title': 'Sass (Node)',
        'url': 'https://github.com/sass/node-sass',
        'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
        'logo': 'node-sass.png'
      },
      {
        'key': 'jade',
        'title': 'Jade',
        'url': 'http://jade-lang.com/',
        'description': 'Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.',
        'logo': 'jade.png'
      }
    ];
    $scope.fnToTest = angular.noop;
    angular.forEach($scope.awesomeThings, function (awesomeThing) {
      awesomeThing.rank = Math.random();
    });
    $scope.calc1 = function(){
      var result = 0;
      var deferred1 = $q.defer();

      $timeout(function () {
          var input = 0,
            result  ;
          result = input + 1;
          console.log("Result is: " + result);
          return result;
        },
        1000)
          .then(function(result){
            deferred1.resolve(result);
          });

      return deferred1.promise;
    };
    $scope.calc2 = function(input){
      var deferred2 = $q.defer();
      $timeout(function () {
          var result = input * 2;
          console.log("Result is: " + result);
          return result;
        },
        2000)
        .then(function (result) {
          deferred2.resolve(result);
        });
      return deferred2.promise;
    };
    $scope.calc3 = function(input){
      var deferred3 = $q.defer();
      $timeout(function () {
          var result = input * input;
          console.log("Result is: " + result);
          deferred3.resolve(result);
        },
        3000)
        .then(function(result){
          deferred3.resolve(result);
        })
      return deferred3.promise;
    };
    $scope.pleaseBePatientQueued = function() {
      $scope.calc1()
        .then(function (input) {
          $scope.calc2(input)
            .then(function (input) {
              $scope.calc3(input);
            });
        });
    };
    $scope.pleaseBePatientTimed = function () {
      var deferred1 = $q.defer(),
        deferred2 = $q.defer(),
        deferred3 = $q.defer(),
        calculation = [],
        result = 0;


      deferred3 = $timeout(function () {
          result = result * result;
          return result;
        },
        3000);
      deferred2 = $timeout(function () {
          result = result * 2;
          return result;
        },
        2000);
      deferred1 = $timeout(function () {
          result = result + 1;
          return result;
        },
        1000);

      calculation.push(deferred3);
      calculation.push(deferred2);
      calculation.push(deferred1);

      return $q.all(calculation)
        .then(function (result) {
          console.log("Result = " + result);
        });

    };
    debugger;
  });
