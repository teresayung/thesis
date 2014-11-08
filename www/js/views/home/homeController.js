angular.module('App.Home', [])

.controller('HomeController',function($scope, $location) {
  //sends to new routes when home page is swiped
  $scope.swiping = function(direction){
    if (direction === 'left'){
      $location.path('/results');
    }
    if (direction === 'right'){
      $location.path('/pending');
    }
  }
  $scope.send = function(){
    
  }
});

;