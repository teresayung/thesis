angular.module('app.services', [])

.factory('ServerRequests', function ($http) {
  //make get request to the route
  var get = function (route) {
    return $http({
      method: 'GET',
      url: route
    })
    .then(function (response) {
      return response.data;
    });
  };

  //make post request to the route with given data
  var post = function (data, route) {
    return $http({
      method: 'POST',
      url: route,
      data: data
    })
    .then(function (response) {
      return response.data;
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
    sendContent: 'someRoute',
    getPending: 'someRoute',
    sendVote: 'someRoute',
    getResults: 'someRoute'
  };
})

.factory('Auth', function ($http, $location, $window) {

  var login = function (user) {
    return $http({
      method: 'POST',
      url: '========add later===========',
      data: user
    })
    .then(function (response) {
      return response.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '========add later===========',
      data: user
    })
    .then(function (response) {
      return response.data.token;
    });
  };

  var loggedIn = function () {
    return !!$window.localStorage.getItem('loggedIn');
  };

  var logout = function () {
    $window.localStorage.removeItem('loggedIn');
    $location.path('/login');
  };


  return {
    login: login,
    signup: signup,
    loggedIn: loggedIn,
    logout: logout
  };
});
