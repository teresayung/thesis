angular.module('App.Pending', [])
.factory('Pending',function(ServerRequest, ServerRoutes){

  var getPending = function(userId){
    ServerRequests.post({ userId: userId }, ServerRoutes.getPending)
      .then(function(response){
        //  response looks like...
        // {
        //  pendingContents: [{
        //    contentId: number,
        //    topic: string,
        //    picture: undefined(url?)
        //    userId: number,
        //    userName: string
        //  }, {}, ...]
        // } 
        return response.contents;
      })
      //if there is an error getting the pendings, console an error.
      .catch(function(error){
        console.error(error);
      });
    
  };

  var countPending = function(userId){
    getPending(userId)
    .then(function(contents){
      return contents.length;
    });
  };

  return {
    getPending: getPending,
    countPending: countPending
  };

});