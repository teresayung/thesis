angular.module('app.services', [])

.factory('ServerRequests', function ($http) {
  //make get request to the route
  var get = function (route) {
    return $http({
      method: 'GET',
      url: route
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var post = function (data, route) {
    return $http({
      method: 'POST',
      url: route,
      data: data
    });
  };

  return {
    get: get,
    post: post
  };
})
.factory('ServerRoutes', function(){
  //returns the objects of the routes
  return {
    getPendings: 'someRoute',
    sendVote: 'someRoute',
    getResults: 'someRoute'
  };
});
