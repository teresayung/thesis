angular.module('App.Signup', [])
  .controller('SignupController', function ($scope, $window, $location, ServerRequests, ServerRoutes){
  	$scope.usernameInput;
  	$scope.passwordInput;

  	$scope.signUp = function (username, password) {

  		// Auth.signup(username, password)
  		// .then(function (response) {
  		// 	//route to home
  			console.log('siginup and login as', username, password);
  			$location.path('/');
  		// })
  		// .catch(function(error){
  		// 	console.error(error);
  		// })
  	}
  });