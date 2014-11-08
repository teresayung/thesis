angular.module('App.Home', [])

//Retrieves and overwrites the default regexp that is used to whitelist safe urls during img sanitization
//Normalizes any url about to be used in img(src) and returns an absolute path
.config(function($compileProvider) {
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.controller('HomeController',function($scope, $location) {
  //sends to new routes when home page is swiped
  $scope.swiping = function(direction){
    if (direction === 'left'){
      $location.path('/results');
    }
    if (direction === 'right'){
      $location.path('/pending');
    }
  }

  //calls the getPicture function from the factory allowing the user to upload/take pictures
  $scope.getPhoto = function() {
    Camera.getPicture()
      .then(function(imageURI) {
        alert(imageURI);
        $scope.currentPhoto = imageURI;
      }, function(error) {
        alert(error); 
      }, {
        quality: 75,
        targetWidth: 320,
        targetHeight: 320,
        saveToPhotoAlbum: false,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
      });
  }

  $scope.send = function() {
    
  }

});

