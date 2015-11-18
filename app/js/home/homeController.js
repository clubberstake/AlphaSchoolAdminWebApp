app.controller('HomeController', ['$scope', '$location',
	function ($scope, $location) {
		$scope.entryBox = 'type in the box';

		$scope.navigatePageTwo = function () {
			$location.path('/pageTwo');
		};
	}]);