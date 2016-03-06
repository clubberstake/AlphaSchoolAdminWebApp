app.controller('ViewCalendarEventController', ['$scope', '$location',
    function ($scope, $location) {

    
    
        $scope.navigateCreateHomeworkAssignment = function () {

            $location.path('/viewHomeworkAssignment');

        };
        

        $scope.navigateCreateAnnouncement = function () {

            $location.path('/viewAnnouncement');

        };
    }]);