angular.module('app')
.service('userSvc', function($http){

  this.getUser = function( user) {
    return $http.get('/api/user/5784418d375c7be6072ffbac')
        .then(function(response) {
          return response.data;
        })
  }

  this.createUser = function( user ) {
    return $http.post('/api/user/', user)
  }
});
