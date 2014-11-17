'use strict';

angular.module('App.Settings', [])

.controller('SettingsController', function($scope, $window, $location, Auth, ServerRequests, ServerRoutes){ //Auth, ServerRequests, ServerRoutes are factories
  var userId = $window.localStorage.getItem('userId');

  if(Auth.loggedIn()){ // checks if the user is loggedIn, should be Auth.loggedIn() without !, put it there for testing without auth set up
    //Logout function - activates when Logout is clicked in SettingsView, redirects to login after
    $scope.logout = function(){
      ServerRequests.post({userId: userId}, ServerRoutes.logout).then(function(){
      //Auth.logout resets the local storage
      Auth.logout(); //want to wipte the local storage data after the post request has been made
      })
    }
    //Route to Results when the "back" button is clicked on the nav bar
    $scope.routeToResults = function(){
      $location.path('/results')
    }
  } else {
    //If not logged in, routes to login automatically
      $location.path('/login')
  }
})


///========= Testing the html ===============///

// Expect local storage to be equal to {loggedIn: true,
// userId: 1234, token: some string} 




