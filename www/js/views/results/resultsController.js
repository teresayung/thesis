'use strict';

angular.module('App.Results', [])

.controller('ResultsController', function($scope, $window, $location, Auth, ServerRequests, ServerRoutes){ //Auth, ServerRequests, ServerRoutes are factories
  
  console.log("are you in controller?")
  // if(!Auth.loggedIn()){ // checks if the user is loggedIn
  //   console.log("user is logged in")
  //   //Call a get request to object the list of results, use a promise to ensure all
  //   //results are obtained before continuing
  //   ServerRequests.get(ServerRoutes.getResults).then(function(response){
  //     //Expect the ServerRequest to output an object with resultsContents property with an array of contents
  //     console.log("inside promise")
  //     $scope.results = response.resultsContents //this will give me the array of objects I want to display
  //   })
  // } else {
  //   //user is not logged in
  //   //route to login page
  // }


///========= Testing the html ===============///

  var results = {resultsContents: [{topic: "prom dress", picture: 'http://s3.weddbook.com/t4/1/9/8/1981083/emerald-strapless-beaded-criss-cross-long-prom-dress.jpg', userId: 1, userName: 'treelala', yes: 4, no: 1}, {topic: "dinner", picture: 'http://www.ivstatic.com/files/et/imagecache/636/files/slides/0413.jpg', userId: 2, userName: 'satoko', yes: 5, no: 0}, {topic: "bubble tea?", picture: "http://upload.wikimedia.org/wikipedia/commons/a/a2/Bubble_Tea.png", userId: 3, userName: 'bace', yes: 600, no: 0}, {topic: "hot or not?", picture: 'http://o0tp7mzzn32msux2jkg8kga0.wpengine.netdna-cdn.com/images/old/6a017c3697a248970b01a3fccf4b2e970b-250wi.png', userId: 1, userName: 'rich', yes: 4, no: 1}]}
  
  $scope.results = results.resultsContents;
  console.table($scope.results, "scope results")

  $scope.routeToHome = function(){
    console.log("are you at home")
    $location.path('/')
  }
  $scope.routeToSettings = function(){
    $location.path('/settings')
  }
})





