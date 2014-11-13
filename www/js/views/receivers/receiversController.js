angular.module('App.Receivers', [])

.controller('ReceiversController', function($scope, $location, ReceiversFactory, ServerRequests, ServerRoutes) {

  //delete this part when server working
  var tempReceivers = [
      {name: 'Teresa', userId: 12345},
      {name: 'Satoko', userId: 67894},
      {name: 'Rich', userId: 23456},
      {name: 'bace', userId: 24689},
      {name: 'Bogut', userId: 54711},
    ];

  $scope.cancelSend = function(){
    //empty the content storage in the ReceiversFactory
    ReceiversFactory.resetContentFromHome();
    $location.path('/'); 
  }

  //when send button is clicked on receivers page,
  //send current selected receivers (as an array) to Receivers Factory
  $scope.setReceivers = function(){
    //move selectedReceivers from view format to model format
    for (var key in $scope.viewSelectedReceivers) {
      $scope.modelSelectedReceivers.push(key);
    }
    //send receivers to ReceiversFactory, get back content & receivers in object
    var sendContent = ReceiversFactory.addReceivers($scope.modelSelectedReceivers);

    //make post request with content and receivers object
    ServerRequests.post(sendContent, ServerRoutes.postContent);
    
    //empty the content storage in the ReceiversFactory
    ReceiversFactory.resetContentFromHome();
    
    //route back to the home page
    $location.path('/'); 
  };

  //all receivers to be listed in the receivers page
  $scope.allReceivers = tempReceivers;
  //$scope.allReceivers = serverRequestFactory.get(serverRoutesFactory.getReceivers);

  //an array to send to the server in the content object
  $scope.modelSelectedReceivers = [];
    
  //a place to store a list of receivers that have been selected in the view
  $scope.viewSelectedReceivers = {};

  //pushes a receiver object to the selectedReceivers array when the receiver is clicked
  $scope.select = function(receiver){
    if ($scope.viewSelectedReceivers[receiver.userId]){
      delete $scope.viewSelectedReceivers[receiver.userId];
    } else {
      $scope.viewSelectedReceivers[receiver.userId] = receiver.name;
    }
  }

  //determines if specific receiver is selected (for visual representation in view)
  $scope.isSelected = function(receiver){
    return !!$scope.viewSelectedReceivers[receiver.userId];
  }
  
});