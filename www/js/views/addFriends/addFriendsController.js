angular.module('App.AddFriends', [])

.controller('AddFriendsController', function($scope, $window, $location, ServerRequests, ServerRoutes, AddFriendsFactory){
  //get userId from local storage
  var userId = $window.localStorage.getItem('userId');

  //set default amount of pending friend requests
  $scope.requestsAmount = 0;

  //determine the proper sentence ending for the amount of friend requests
  $scope.sentenceEnd = AddFriendsFactory.getSentenceEnd($scope.requestsAmount);

  //set default response to an attempt to add a friend
  $scope.requestResponse = '';

  //determines if a response message will show or not
  $scope.responseExists = function(){
    var check = ($scope.requestResponse === '') ? false : true;
    console.log(check);
    return check;
  }

  //make a friend request
  $scope.makeRequest = function(friendName){
    console.log("this is working")
    ServerRequests.post({username: friendName}, ServerRoutes.requestFriend)
      .then(function(response){
        $scope.requestResponse = response;
      })
      .catch(function(error){
        $scope.requestResponse = 'There was an error with your Friend Request'
          console.log(error);
      });
  }

  //Storage array for all pending friend requests
  $scope.allRequests = [];

  //get all pending friend requests
  //getRequest
  //addFriend
  //confirmFriend

  $scope.getPendingRequests = function(){
    ServerRequests.post({userId: userId}, ServerRoutes.getRequest)
      .then(function(response){
        $scope.allRequests = response.requests;
      })
      .catch(function(error){
          console.error(error);
      });

  }

  $scope.routeBack = function(){
    $location.path('/friends');
  }

})
