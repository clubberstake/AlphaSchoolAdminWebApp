app.controller('HomeController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.entryBox = '';

        $scope.navigateCreateHomeworkAssignment = function () {

           // $location.path('/teacherHomepage');
            //$location.path('/studentHomepage');
            $location.path('/adminAssignCourse');
            

        };
    }]);