'use strict';

angular.module('App.Settings', [])

.controller('SettingsController', function($scope, $window, $location, Auth, ServerRequests, ServerRoutes){ //Auth, ServerRequests, ServerRoutes are factories
  var userId = $window.localStorage.getItem('userId');

  //Logout function - activates when Logout is clicked in SettingsView, redirects to login after
  $scope.logout = function(){
    //Auth.logout sends an http request to the server to remove the token from the database and resets the local storage
    Auth.logout(userId);
  };
  //Route to Results when the "back" button is clicked on the nav bar
  $scope.routeToResults = function(){
    $location.path('/results')
  }
})


///========= Testing the html ===============///

// Expect local storage to be equal to {loggedIn: true,
// userId: 1234, token: some string} 




