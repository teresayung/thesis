angular.module('App.Login', [])
	.controller('LoginController', function ($scope, $window, $location, Auth) {
		$scope.usernameInput;
		$scope.passwordInput;
		$scope.showLoginError = false;

		$scope.logIn = function(username, password){
			Auth.login(username, password)
			  .then(function(error){
			  	if(error){
				  	//if there is an error message from the server, show it to the user
			  		$scope.showLoginError = true;
			  		$scope.loginError = error;
			  	}else{
				  	//if there is no error, route to home
						console.log('login as ', username, password);
	          $location.path('/');
			  	}
			  });
		};

		$scope.signUp = function(){
			$location.path('/signup');
		};
			
	});