var app = angular.module('admin', []);

app.controller('adminCtrl', [
  "$scope",
  function($scope) {
    $scope.candidates = [];
 
    $scope.addCandidate = function() {
      if ($scope.newCandidate.length > 0) {
        console.log("Added " + $scope.newCandidate);
        $scope.candidates.push({ name: $scope.newCandidate, votes: 0 });
        $scope.newCandidate = "";
      }
      else {
        console.log("Candidate name not entered");
      }
    };

    $scope.remove = function(candidate) {
      console.log("Removing candidate: " + candidate.name);
    };

  }
]);
