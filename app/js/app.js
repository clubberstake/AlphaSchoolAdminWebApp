var app = angular.module('alphaAdminWebApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
		templateUrl: 'app/js/home/home.html',
		controller: 'HomeController'
	})
		.when('/createHomeworkAssignment', {
			templateUrl: 'app/js/createHomeworkAssignment/createHomeworkAssignment.html',
			controller: 'CreateHomeworkAssignmentController'
		})
        .when('/pageThree', {
			templateUrl: 'app/js/pageThree/pageThree.html',
			controller: 'PageThree'
		})
		.otherwise({
            redirectTo: '/home'
        });
}]);
