angular.module('App.Auth', [])

.factory('Auth', function ($http, $location, $window) {

  //===================HELPER FUNCTION========================

  var auth = function(username, password, route){
    var userInfo = {
      username: username,
      password: password
    };
    return $http({
      method: 'POST',
      url: '========add later===========',
      data: userInfo
    })
    .then(function (response) {
      //expect respose to be an object with userId and token info.
      //store loggedIn boolean, userId and token in local storage
      $window.localStorage.setItem('loggedIn', true);
      $window.localStorage.setItem('userId', response.data.userId); 
      $window.localStorage.setItem('token', response.data.token);
      return response.data;
    });
  };
  
  //===================SERVICE FUNCTION========================
  var login = function (username, password) {
    return auth(username, password, 'route for login');
  };

  var signup = function (username, password) {
    return auth(username, password, 'route for signup');
  };

  var loggedIn = function () {
    return !!$window.localStorage.getItem('loggedIn');
  };

  var logout = function () {
    //When logout button is clicked, set local storage object to be loggedIn = false and userId = undefined 
    $window.localStorage.setItem('loggedIn', false);
    $window.localStorage.setItem('userId', undefined);
    $location.path('/login');
  };


  return {
    login: login,
    signup: signup,
    loggedIn: loggedIn,
    logout: logout
  };
});
