var app = angular.module('voter',[]);

app.controller('MainCtrl', [
  '$scope',
  function($scope) {

    $scope.candidates = [];
    $scope.selected = [];
      
    $scope.candidates.push({ name:"Katya Sky", votes:0 });
    $scope.candidates.push({ name:"Jenyth Lightsong", votes:0 });
    $scope.candidates.push({ name:"Mirrielle Blackrose", votes:0 });
    $scope.candidates.push({ name:"Alina Do'Vei", votes:0 });

    $scope.updateValues = function() {
      console.log("Updating selected values");
      $scope.selected = [];

      for (var i = 0; i < $scope.candidates.length; i++) {
 
        if ($scope.candidates[i].SELECTED === "Y") {
          $scope.candidates[i].votes += 1;
          $scope.selected.push($scope.candidates[i]);
        }
      };

      console.log($scope.selected);
    };

  },
]);
