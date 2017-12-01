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
      const index = $scope.candidates.indexOf(candidate);
    
      if (index !== -1) {
        $scope.candidates.splice(index, 1);
        console.log("Candidate removed successfully");
      }
    };

  }
]);
