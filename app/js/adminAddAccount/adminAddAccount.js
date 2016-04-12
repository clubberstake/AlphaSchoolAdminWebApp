app.controller('AdminAddAccountController', ['$scope', '$location',
    function($scope, $location) {


        $scope.navigateAdminAssignAccount = function() {

            $location.path('/adminAssignAccount');

        };
    }]);
