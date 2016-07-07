angular.module("app", ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home2', {
            url: "/h",
            templateUrl: "./app/routes/home/homeTmpl.html",
            controller: 'homeCtrl'
        })

    .state('home', {
        templateUrl: './app/views2/home.html',
        url: '/'
    })

    .state('tma-2', {
        templateUrl: './app/views2/tma2tmpl.html',
        url: '/headphones/tma-2',
        controller: 'productCtrl'
    })

    .state('order', {
        templateUrl: './app/views2/order.html',
        url: '/order'
    })

    .state('cart', {
        templateUrl: './app/views2/cart.html',
        url: '/cart',
        controller: 'userCtrl'
    })

    .state('login', {
        url: '/login',
        templateUrl: './app/routes/login/loginTmpl.html',
        controller: 'loginCtrl'
    })

    .state('profile', {
        url: '/profile',
        templateUrl: './app/routes/profile/profileTmpl.html',
        controller: 'profileCtrl',
        resolve: {
            user: function(authService, $state) {
                return authService.getCurrentUser().then(function(response) {
                    if (!response.data)
                        $state.go('login');
                    return response.data;
                }).catch(function(err) {
                    $state.go('login');
                });
            }
        }
    });

});
