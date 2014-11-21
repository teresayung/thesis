angular.module('App.HomeFactory', [])
.factory('HomeFactory', function(ServerRequests, ServerRoutes){

  var checkStatus = function(userId){
    return ServerRequests.post({ userId: userId }, ServerRoutes.checkStatus)
    .then(function(response){
      //response will look like
      // {
        // pendingCount: number,
        // friendRequestCount: number
      // }
      return response;
    })
    //if there is an error getting the pendings, console an error.
    .catch(function(error){
      console.error(error);
    });
  };

  return {
    checkUpdates: checkUpdates
  };

});