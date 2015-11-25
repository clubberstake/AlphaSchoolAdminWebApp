app.controller('HomeController', ['$scope', '$location',
	function ($scope, $location) {
		$scope.entryBox = '';

		$scope.navigatePageTwo = function () {
			$location.path('/pageTwo');
		};
	}]);