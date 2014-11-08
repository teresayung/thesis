angular.module('App.Login', [])
	.controller('LoginController', function ($scope, $window, $location, Auth) {
		$scope.usernameInput;
		$scope.passwordInput;

		$scope.logIn = function(username, password){
			$window.localStorage.setItem('loggedIn', true);
			console.log('logging in with ', username, password);
			// Auth.login(username, password)
			//   .then(function(response){
			//   	//after logging in, set the userId and route to home
   //        $window.localStorage.setItem('userId', response.userId);
          $location.path('/');
			//   })
			//   .catch(function(error){
			//   	console.error(error);
			//   });
		}

		$scope.signUp = function(){
			$location.path('/signup');
		}
			
	});