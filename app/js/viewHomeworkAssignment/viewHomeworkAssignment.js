app.controller('ViewHomeworkAssignmentController', ['$scope', '$location', 'StudentHomeworkAssignmentService',
    function ($scope, $location, StudentHomeworkAssignmentService) {
        $scope.navigateStudentHomeworkAssignment = function () {
            $location.path('/studentHomeworkAssignment');
        };

        StudentHomeworkAssignmentService.get().then(function (responseObj) {
            console.log('Attempting studentHomeworkAssignment get');
            console.log(responseObj.data);
        });

    }]);

app.factory('StudentHomeworkAssignmentService', ['$http', 'UrlService', function ($http, UrlService) {

    var getData = function () {
        
        return UrlService.studentHomeworkAssignmentGetScreenData();
    };

    return {
        get: getData,
    }






    }]);