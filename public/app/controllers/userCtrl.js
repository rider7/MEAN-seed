angular.module('myApp')
.controller('userCtrl', function($scope, productSvc, cartSvc, userSvc, orderSvc){

  userSvc.getUser().then(function(data){
     $scope.theUser = data;
     console.log(data)
   })


});
