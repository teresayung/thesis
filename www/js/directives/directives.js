angular.module('App.Directives', [])
  .directive('setBackgroundImage', function(){
  	return {
  		restrict: 'A',
  		scope: {
  			image: '='
  		},
  		link: function(scope, element, attributes){
  			scope.$watch('image', function(newVal, oldVal){
  				element.css('background-image', 'url(' + scope.image + ')');
  			})
  		}
  	}
  });