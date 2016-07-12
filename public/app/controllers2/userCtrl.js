angular.module('app')
.controller('userCtrl', function($scope, productSvc, cartSvc, userSvc, orderSvc){

  userSvc.getUser().then(function(data){
     $scope.theUser = data;
    //  console.log(data.cart)
   })


  //  $scope.getTotal = function(){
   //
  //    console.log(data)
  //      var total = 0;
  //      for(var i = 0; i < data.cart.item.length; i++){
  //          var product = data.cart.item[i];
  //          total += (item.price * item.quantity);
  //      }
  //      $scope.Total = total;
  //      console.log(total)
  //  }

});
