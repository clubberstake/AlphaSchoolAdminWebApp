var app = angular.module('alphaAdminWebApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
		templateUrl: 'app/js/home/home.html',
		controller: 'HomeController'
	})
		.when('/pageTwo', {
			templateUrl: 'app/js/pageTwo/pageTwo.html',
			controller: 'PageTwoController'
		})
		.otherwise({
            redirectTo: '/home'
        });
}]);
