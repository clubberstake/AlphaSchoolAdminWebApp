app.controller('TeacherHomepageController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.navigateCreateHomeworkAssignment = function () {

            $location.path('/createHomeworkAssignment');

        };
        $scope.navigateCreateCalendarEvent = function () {

            $location.path('/createCalendarEvent');

        };

        $scope.navigateCreateAnnouncement = function () {

            $location.path('/createAnnouncement');

        };
         $scope.navigateCreateAnnouncement = function () {

            $location.path('/createEmail');

        };
    }]);