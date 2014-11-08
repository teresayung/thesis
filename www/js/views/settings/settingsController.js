'use strict';

angular.module('App.Settings', [])

.controller('SettingsController', function($scope, $window, $location, Auth, ServerRequests, ServerRoutes){ //Auth, ServerRequests, ServerRoutes are factories

  if(Auth.loggedIn()){ // checks if the user is loggedIn, should be Auth.loggedIn() without !, put it there for testing without auth set up
    //Logout function - activates when Logout is clicked in SettingsView
    $scope.logout = function(){
      //When logout button is clicked, set local storage object to be loggedIn = false and userId = undefined 
      $window.localStorage.setItem('loggedIn', false);
      $window.localStorage.setItem('userId', undefined);
      $location.path('/login') //Redirects to /login after logging out
    }
    //Route to Results when the "back" button is clicked on the nav bar
    $scope.routeToResults = function(){
      console.log("are you at results")
      $location.path('/results')
    }
  } else {
    //If not logged in, routes to login automatically
      $location.path('/login')
  }
})


///========= Testing the html ===============///

// Expect local storage to be equal to {loggedIn: true,
// userId: 1234} 




