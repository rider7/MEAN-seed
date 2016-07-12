angular.module('app')
	.service('cartSvc', function( $http ) {

// product._id passed to product to fulfil cart Schema
// user id hardcoded in use npm passport in the future
// quantity also hardcoded and should be chosen by user in the future
		this.createCart = function( product ) {
			console.log(123, product)
			return $http.post('/api/cart/5784418d375c7be6072ffbac',
			{ item: product, quantity: 1})
		}

		this.getCart = function() {
			return $http.get('/api/cart')
					.then(function(response) {
						return response.data;
					})
		}

		this.updateCart = function( cart ) {
			return $http.put('/api/cart/5784418d375c7be6072ffbac')
		}

	})

	// this.removeFromCart = function(cart_id, product_id) {
	//     return $http({
	//       method: 'PUT',
	//       url: "/api/cart/" + cart_id + "/" + product_id,
	//     }).then(function(response){
	//       console.log(response);
	//       return response;
	//     })
	//   }

// app.put('/api/cart', isAuthed, cartCtrl.update);
//
// update: function(req, res, next){
// 			cart.findOne({user: req.user._id}, function(error, response) {
// 				console.log(response);
// 				if (!response){
// 					var newObject = {
// 						user: req.user._id,
// 						items: [{
// 							quantity: 1,
// 							product: req.body._id
// 						}]
// 						,
// 						total: req.body.price
// 					}
// 					console.log(newObject);
// 					cart.create(newObject);
// 					res.status(500).json(newObject);
// 				} else {
// 					var newItem = {
// 								quantity: 1,
// 								product: req.body._id
// 						}
// 						response.items.push(newItem);
// 					response.save(
// 					function(err, model) {
// 						console.log(err);
// 					})
// 					}
// 					// response.items.push(newItem)
// 					// response.save(function () {
// 					// 	res.status(200).json(response);
// 					// })
// 			})
// 	},
