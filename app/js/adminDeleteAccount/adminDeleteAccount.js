app.controller('AdminDeleteAccountController', ['$scope', '$location',
    function ($scope, $location) {
        
$scope.navigateAdminAssignAccount = function () {

            $location.path('/adminAssignAccount');

        };
        
	    $scope.navigateAdminAssignAccount = function () {

            $location.path('/adminAddAccount');

        };
    }]);