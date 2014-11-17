angular.module('App.Signup', [])
  .controller('SignupController', function ($scope, $window, $location, ServerRequests, ServerRoutes){
  	$scope.usernameInput;
  	$scope.passwordInput;
    $scope.emailInput;
    $scope.showSignupError = false;
    $scope.signupError;

  	$scope.signUp = function (username, password, email) {
  		Auth.signup(username, password, email)
  		.then(function (error){
        //if there is a error message from the server, show it to the user
        if(error){
          $scope.showSignupError = true;
          $scope.signupError = error;
        }else{
          //if there is no error, route to home
    			console.log('siginup and login as', username, password);
    			$location.path('/');
        }
  		})
  	};

  });