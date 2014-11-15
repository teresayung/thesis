'use strict';

angular.module('App.Results', [])

//when minify to deploy, want to write controller with [] syntax to "protect" them
.controller('ResultsController', function($scope, $window, $location, Auth, ServerRequests, ServerRoutes){ //Auth, ServerRequests, ServerRoutes are factories
  console.log("are you in controller?");

  var userId = $window.localStorage.getItem('userId');
  if(!Auth.loggedIn()){ // checks if the user is loggedIn
    //Call a post request with the userId to the server to get a list of results with that userId 
    //results are obtained before continuing
    ServerRequests.post({userId: userId}, ServerRoutes.getResults).then(function(response){
      //Expect the ServerRequest to output an array of contents

       //the for loop is to make it so that the recent items are displayed first
      $scope.results = [];
      for(var recent = response.length - 1; recent >= 0 ; recent--){
        $scope.results.push(response[recent]);
      }
    })
  } else {
    //user is not logged in
    //route to login page
    $location.path('/login')
  }

///========= Testing the html ===============///

  // var results = [{topic: "prom dress", picture: 'http://s3.weddbook.com/t4/1/9/8/1981083/emerald-strapless-beaded-criss-cross-long-prom-dress.jpg', userId: 1, userName: 'treelala', yes: 4, no: 1}, {topic: "dinner", picture: 'http://www.ivstatic.com/files/et/imagecache/636/files/slides/0413.jpg', userId: 2, userName: 'satoko', yes: 5, no: 0}, {topic: "bubble tea?", picture: "http://upload.wikimedia.org/wikipedia/commons/a/a2/Bubble_Tea.png", userId: 3, userName: 'bace', yes: 600, no: 0}, {topic: "hot or not?", picture: 'http://o0tp7mzzn32msux2jkg8kga0.wpengine.netdna-cdn.com/images/old/6a017c3697a248970b01a3fccf4b2e970b-250wi.png', userId: 1, userName: 'rich', yes: 4, no: 1}]
  
  // $scope.results = results;
  // console.table($scope.results, "scope results")

  $scope.routeToHome = function(){
    console.log("are you at home")
    $location.path('/')
  }
  $scope.routeToSettings = function(){
    $location.path('/settings')
  }
})





