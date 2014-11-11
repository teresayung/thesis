'use strict';

describe('PendingController', function(){

	it('Module should exist', function() {
	    expect(true).toBe(true)
	});
  
  //======================== PREPARATION ==============================

	var $scope, $rootScope, /* $httpBackend, */ServerRequests, ServerRoutes, spyEvent;

	beforeEach(module('App'));
	beforeEach(inject(function($injector) {

	  // mock out our dependencies
	  $rootScope = $injector.get('$rootScope');
	  $httpBackend = $injector.get('$httpBackend');
	  ServerRequests = $injector.get('ServerRequests');
	  ServerRoutes = $injector.get('ServerRoutes');
	  $scope = $rootScope.$new();

	  var $controller = $injector.get('$controller');

	  var methods = {
	  	getPending: function(argument){ return argument },
	  	sendVote: function(argument){ return argument }
	  };

	  createController = function () {
	    return $controller('PendingController', {
	      $scope: $scope,
	      ServerRequests: ServerRequests,
	      ServerRoutes: ServerRoutes
	    });
	  };
    createController();
	}));

  //======================== TESTS ==============================
//test
//does it make a post request to get the pending list?
//does it send a post request with the correct vote infomation?
//does it redirect to the home if there is no more pendings?
  var mockPendingResponse = {
  	pendingContents: [
	  	   	{ contentId: 1,
	  	   	  topic: 'This owl beanie for Rich?',
	  	   	  picture: 'owl-beanie',
	  	   	  userId: 100,
	  	   	  userName: 'Teresa' },
	  	   	{ contentId: 2,
	  	   	  topic: 'for lunch?',
	  	   	  picture: 'turtle-burger',
	  	   	  userId: 200,
	  	   	  userName: 'Bace' },
	  	   	{ contentId: 3,
	  	   	  topic: 'still grumpy?',
	  	   	  picture: 'http://i.imgur.com/Cxagv.jpg',
	  	   	  userId: 300,
	  	   	  userName: 'Rich' }
	  	   ]
  };
  
  it('should call checkPending() when controller is loaded', function () {
    $httpBackend.expectPOST('someRoute').respond(mockPendingResponse);
    $httpBackend.flush();
    expect($scope.pendingList).to.eql(mockPendingResponse.pendingContents);
  });

  it('should have a sendVote method on the $scope', function() {
    expect($scope.sendVote).to.be.a('function');
  });
  
  // it('should call sendVote with 1, when yes button is clicked', function() {
  // 	spyEvent = spyOnEvent('.vote-yes', 'click');
  //   $('.vote-yes').trigger( "click" );
       
  //   expect('click').toHaveBeenTriggeredOn('.vote-yes');
  //   expect(spyEvent).toHaveBeenTriggered();

  //   $('.vote-yes').trigger( "click" );
  //   expect(methods.sendVote).toHaveBeenCalledWith(1);
  // });

  // it('should call sendVote with -1, when no button is clicked', function() {
  //   $('.vote-no').trigger( "click" );
  //   expect(methods.sendVote).toHaveBeenCalledWith(0);
  // });

  // it('should have the pendingList shifted after sendingVote', function() {
  //   var before = $scope.pendingList.length;
  //   $('.vote-yes').trigger( "click" );
  //   expect($scope.pendingList.length - before)to.Equal(1);
  // });

  // it('should have the next content after shifting pendingList', function() {
  // 	$scope.pendingList = mockPendingResponse.pendingContents;
  // 	expect($scope.sender).toBe('Teresa');
  // 	expect($scope.topic).toBe('This owl beanie for Rich?');
  // 	expect($scope.topicUrl).toBe('owl-beanie');
  // 	$('.vote-yes').trigger( "click" );
  // 	expect($scope.sender).toBe('Bace');
  // 	expect($scope.topic).toBe('for lunch?');
  // 	expect($scope.topicUrl).toBe(false);
  // });

  // it('should route to home when there is no more pending', function() {
  // });
});
