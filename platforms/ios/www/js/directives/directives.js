angular.module('App.Directives', [])
  .directive('setImage', function(){
  	return {
  		restrict: 'A',
  		scope: {
  			image: '='
  		},
  		link: function(scope, element, attributes){
  			scope.$watch('image', function(newVal, oldVal){
          element.attr("src", scope.image);
  			})
  		}
  	}
  });