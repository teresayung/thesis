angular.module('App.AddFriendsFactory', [])

.factory('AddFriendsFactory', function(ServerRequests, ServerRoutes){

  var checkRequest = function(userId){
    return ServerRequests.post({ userId: userId }, ServerRoutes.checkFriendRequest)
    .then(function(response){
      return response.count;
    })
    //if there is an error getting the pendings, console an error.
    .catch(function(error){
      console.error(error);
    });
  };

  return {
    getSentenceEnd: function(requests){
      if (requests === 0){
        return 'requests.';
      }
      if (requests === 1){
        return 'request!';
      }
      if (requests > 1){
        return 'requests!';
      }
    },
    checkRequest: checkRequest

  };
});
