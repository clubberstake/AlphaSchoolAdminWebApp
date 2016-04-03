app.controller('adminAddAccountController', ['$scope', '$location',
    function($scope, $location) {


        $scope.navigateAdminAssignAccount = function() {

            $location.path('/adminAssignAccount');

        };
    }]);
