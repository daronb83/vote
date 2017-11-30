var module = angular.module('voter',[]);

var controller = module.controller('MainCtrl', [
  '$scope',
  function($scope) {
    $scope.candidate = "Bob Smith";
    $scope.submission = "Submission";
  },
]);
