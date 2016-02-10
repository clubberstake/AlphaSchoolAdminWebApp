app.controller('TeacherHomepageController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.navigateCreateHomeworkAssignment = function () {

            $location.path('/createHomeworkAssignment');

        };
        $scope.navigateCreateCalendarEvent = function () {

            $location.path('/createCalendarEvent');

        };
    }]);