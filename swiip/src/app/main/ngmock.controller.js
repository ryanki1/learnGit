/**
 * Created by ryanki10 on 14/05/15.
 */

'use strict';

angular.module('swiip')
  .controller('CDashboard', ['$scope', '$http', function($scope, $http){
    $scope.data = 'dog';
    $http({
      url: '/data',
      method: 'GET'
    })
      .success(function(data){
        $scope.data = data;
      });
  }]);
