'use strict;'

var BunkinProfile = angular.module('BunkinProfile', []);

BunkinProfile.controller('bunkCardList', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('profile.json').success(function(data) {
      $scope.users = data;
});
