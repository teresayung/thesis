angular.module('App.Pending', [])
.controller('PendingController', function ($scope, $window, $location, ServerRequests, ServerRoutes, Auth) {
	
	//if not loggedIn, send the user to logIn
	if(!Auth.loggedIn()){
		$location.path('/logIn');
	}

	//get the userId info from local storage and set it as a local variable
	var userId = $window.localStorage.getItem('userId');

	//get all the pendings for the user
	$scope.getPending = function(){
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
			  //if there are no pending, redirect back to home
				if($scope.pendingList.length === 0){
					//redirect to home
					$location.path('/');
				}else{
					//show the 1st pending item
					showContent(pendingList[0]);
				}
		  })
		  //if there is an error getting the pendings, console an error.
		  .catch(function(error){
		  	console.error(error);
		  });
	};
	$scope.getPendings();


  $scope.sendVote = function(contentId, vote){
  	var result = {
  		contentId: contentId,
  		vote: vote
  	};
  	ServerRequests.post(result, ServerRoutes.sendVote)
  	  .then(function(){
  	  	//success??
  	  })
  	  //if there is an error getting the pendings, console an error.
  	  .catch(function(error){
  	  	console.error(error);
  	  });
  	//refresh pendingList splice and showContent
  };

  var showContent = function(currentContent){
  	$scope.contentId = currentContent.contentId;
  	$scope.topic = currentContent.topic;
  	//set background-image to the pic $('.photo').
  	$scope.sender = currentContent.userName;
  };

});

//test
//does it make a post request to get the pending list?
//does it redirect to the home if there is no more pendings?
//does it send a post request with the correct vote infomation?
