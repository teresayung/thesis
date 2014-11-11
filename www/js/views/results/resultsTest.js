describe('Module should exist', function() {
  //Load the module with ResultsController
  beforeEach(module('App'));

  var controller, scope;
  //inject the $controller and $rootScope services in eacj beforeEach block
  beforeEach(inject(function ($controller, $rootScope){
    //Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    //Create the controller
    controller = $controller('ResultsController', {
      $scope: scope
    });

    //** now we have access to both the controller as well as the scope of the ResultsController
  }));


  it('Results should be an object', function() {
      expect(scope.results).toEqual(jasmine.any(Function))
  });

  // it('Controller should exist', function() {
  //     expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
  // });

});

// describe('Should check for authentication', function() {

//   it('Should check if user is logged in', function() {
//       expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
//   });

//   it('Controller should exist', function() {
//       expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
//   });
// });

// describe('Can retrieve data', function() {

//   it('Data is received', function() {
//       expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
//   });

//   it('Data should be in the right order', function() {
//       expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
//   });
// });

//write fake injections for $scope, $window, $location, Auth, ServerRequests, ServerRoutes
