app.controller('HomeController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.entryBox = '';

        $scope.navigateCreateHomeworkAssignment = function () {
            // $location.path('/createHomeworkAssignment');
            $location.path('/pageThree');
        };
    }]);