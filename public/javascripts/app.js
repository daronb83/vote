var app = angular.module('voter',[]);

app.controller('MainCtrl', [
  '$scope',
  function($scope) {

    $scope.candidates = [];
    $scope.selected = [];
      
    $scope.candidates.push({ name:"Bob Smith", votes:0 });
    $scope.candidates.push({ name:"Susan Summers", votes:1 });

    $scope.updateValues = function() {
      $scope.selected = [];

      for (candidate in candidates) {
        if (candidate.SELECTED === "Y") {
          $scope.selected.push(candidate);
        }
      };
    };

  },
]);
