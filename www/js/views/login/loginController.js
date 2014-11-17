angular.module('App.Login', [])
	.controller('LoginController', function ($scope, $window, $location, Auth) {
		$scope.usernameInput;
		$scope.passwordInput;
		$scope.showLoginError = false;

		$scope.logIn = function(username, password){
			Auth.login(username, password)
			  .then(function(response){
			  	if(response.error){
			  		$scope.showLoginError = true;
			  		$scope.loginError = response.error;
			  	}else{
				  	//after logging in, route to home
						console.log('login as ', username, password);
	          $location.path('/');
			  	}
			  })
			  .catch(function(error){
			  	console.error(error);
			  });
		}

		$scope.signUp = function(){
			$location.path('/signup');
		}
			
	});