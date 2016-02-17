app.controller('StudentHomepageController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.navigateCreateHomeworkAssignment = function () {

            $location.path('/viewHomeworkAssignment');

        };
        $scope.navigateCreateCalendarEvent = function () {

            $location.path('/viewCalendarEvent');

        };

        $scope.navigateCreateAnnouncement = function () {

            $location.path('/viewAnnouncement');

        };
    }]);
    
    