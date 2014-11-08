angular.module('App.Auth', [])

.factory('Auth', function ($http, $location, $window) {

  var login = function (username, password) {
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
    console.log("am i logging out?")
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
