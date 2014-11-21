'use strict';

angular.module('App.Results', [])

//when minify to deploy, want to write controller with [] syntax to "protect" them
.controller('ResultsController', function($scope, $window, $location, Auth, ServerRequests, ServerRoutes){ //Auth, ServerRequests, ServerRoutes are factories
  console.log("are you in controller?");
  
 

  // var userId = $window.localStorage.getItem('userId');

  // //Call a post request with the userId to the server to get a list of results with that userId 
  // //results are obtained before continuing
  // ServerRequests.post({userId: userId}, ServerRoutes.getResults).then(function(response){
  //   //Expect the ServerRequest to output an array of contents

  //    //the for loop is to make it so that the recent items are displayed first
  //   $scope.results = [];
  //   for(var recent = response.length - 1; recent >= 0 ; recent--){
  //     response[recent].yesPercent = (response[recent].yes/(response[recent].yes + response[recent].no))*100 + '%';
  //     response[recent].noPercent = (response[recent].no/(response[recent].yes + response[recent].no))*100 + '%';
  //     $scope.results.push(response[recent]);
  //   }
  // })


///========= Testing the html ===============///

  var results = [{topic: "prom dress", data: 'http://s3.weddbook.com/t4/1/9/8/1981083/emerald-strapless-beaded-criss-cross-long-prom-dress.jpg', userId: 3, userName: 'treelala', yes: 4, no: 1, contentId: 100}, {topic: "dinner", data: 'http://www.ivstatic.com/files/et/imagecache/636/files/slides/0413.jpg', userId: 2, userName: 'satoko', yes: 5, no: 4, contentId: 101}, {topic: "bubble tea?", data: "http://upload.wikimedia.org/wikipedia/commons/a/a2/Bubble_Tea.png", userId: 3, userName: 'bace', yes: 4, no: 1, contentId: 102}, {topic: "hot or not?", data: 'http://o0tp7mzzn32msux2jkg8kga0.wpengine.netdna-cdn.com/images/old/6a017c3697a248970b01a3fccf4b2e970b-250wi.png', userId: 1, userName: 'rich', yes: 1, no: 2, contentId: 103}]
    //the for loop is to make it so that the recent items are displayed first
  $scope.results = [];
  
  for(var recent = results.length - 1; recent >= 0 ; recent--){
    results[recent].yesPercent = (results[recent].yes/(results[recent].yes + results[recent].no))*100 + '%';
    results[recent].noPercent = (results[recent].no/(results[recent].yes + results[recent].no))*100 + '%';

    $scope.results.push(results[recent]);
  }

  // $scope.results = results;

  $scope.routeToHome = function(){
    console.log("are you at home")
    $location.path('/')
  }

  $scope.routeToSettings = function(){
    $location.path('/settings')
  }

  console.log($scope.results, "scope results")

})





