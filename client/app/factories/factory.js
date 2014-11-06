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

  //make post request to the route with given data
  var post = function (data, route) {
    return $http({
      method: 'POST',
      url: route,
      data: data
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    get: get,
    post: post
  };
})

.factory('ServerRoutes', function(){
  //return an object of the routes
  return {
    getPendings: 'someRoute',
    sendVote: 'someRoute',
    getResults: 'someRoute'
  };
});
