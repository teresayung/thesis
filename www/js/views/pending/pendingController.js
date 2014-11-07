angular.module('App.Pending', [])
.controller('PendingController', function ($scope, $window, $location, ServerRequests, ServerRoutes, Auth) {
	
	//======================== initialize ==============================

	// //if not loggedIn, send the user to logIn
	// if(!Auth.loggedIn()){
	// 	$location.path('/logIn');
	// }

	var contentId;
	//get the userId info from local storage and set it as a local variable
	var userId = $window.localStorage.getItem('userId');

	//get all the pendings for the user
	var getPending = function(){
		ServerRequests.post(userId, ServerRoutes.getPending)
		  .then(function(response){
				/* response looks like...
				{
					pendingContents: [{
						contentId: number,
						topic: string,
						picture: undefined(url?)
						userId: number,
						userName: string
					}, {}, ...]
				} */
		  	$scope.pendingList = response.pendingContents;
			  checkPending();
		  })
		  //if there is an error getting the pendings, console an error.
		  .catch(function(error){
		  	console.error(error);
		  });
	};
	getPendings();

	//======================== click function ==============================
	
  $scope.sendVote = function(vote){
  	var result = {
  		'contentId': contentId,
  		'vote': vote
  	};
  	ServerRequests.post(result, ServerRoutes.sendVote)
  	  .then(function(){
  	  	$scope.pendingList.shift();
  	  	checkPending();
  	  })
  	  //if there is an error on voting, console an error.
  	  .catch(function(error){
  	  	console.error(error);
  	  });
  };

  //======================== helper functions ==============================

  var showContent = function(currentContent){
  	contentId = currentContent.contentId;
  	$scope.topic = currentContent.topic;
  	$scope.sender = currentContent.userName;
  	$('.photo').css('background','url(' + currentContent.picture + ') no-repeat');
  };

  var checkPending = function(){
	  //if there are no pending, redirect back to home
		if($scope.pendingList.length === 0){
			//redirect to home swipe back??
			$location.path('/');
		}else{
			//show the 1st pending item
			showContent(pendingList[0]);
		}
  }

});

