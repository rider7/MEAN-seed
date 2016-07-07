angular.module('app')
.controller('controller', function($scope, productSvc, cartSvc, userSvc, orderSvc){
//these functions should all be in services to do the heavy lifting
//
productSvc.getProducts().then(function(data){
  $scope.productList = data;
})

// function for the button to buy product, product._id passed through product argument below
// then passed to cartSvc POST request on cartSvc
$scope.buyProduct = function(product) {
  cartSvc.createCart(product).then(function(data){
  })
 }

});
