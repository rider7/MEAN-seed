angular.module('app')
.directive('projectDir', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
  element.on('mouseenter', function(){
    element.css({opacity: .5})
  })
    element.on('mouseleave', function(){
      element.css({opacity: 1})
  })
        }
    }
});
