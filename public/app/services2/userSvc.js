angular.module('app')
.service('userSvc', function($http){

  this.getUser = function( user) {
    return $http.get('/api/user/:id')
        .then(function(response) {
          return response.data;
        })
  }

  this.createUser = function( user ) {
    return $http.post('/api/user/', user)
  }
});
