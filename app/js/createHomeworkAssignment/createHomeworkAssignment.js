app.controller('CreateHomeworkAssignmentController', ['$scope', 'TeacherCreateHomeworkService',
    function ($scope, TeacherCreateHomeworkService) {
        $scope.title = 'PageTwo bruh';

        $scope.navigateTeacherCreateHomeworkControllerAccount = function () {
            $location.path('/teacherCreateHomeworkController');
        };

        $scope.navigateTeacherAnnouncementControllerAccount = function () {
            $location.path('/teacherCreateAnnouncementController');
        };

        TeacherCreateHomeworkService.get().then(function (responseObj) {
            console.log('Attempting TeacherCreateHomeworkService get');
            console.log(responseObj.data);
        });

        TeacherCreateHomeworkService.post().then(function (responseObj) {
            console.log('Attempting TeacherCreateHomeworkService post');
            console.log(responseObj.data);
        });
    }]);

app.factory('TeacherCreateHomeworkService', ['$http', 'UrlService', function ($http, UrlService) {

    var getData = function () {
        var id = "12345";
        return UrlService.teacherCreateHomeworkGetScreenData(id);
    };


    var postData = function () {
        var homework = { "AnnouncementText": null, "DateTime": "2016-04-06T00:46:33.6011049+00:00", "Attachment": "c://text.txt", "CourseId": "565" }
        return UrlService.teacherCreateHomeworkPostScreenData(homework);
    };

    return {
        get: getData,
        post: postData,
    }

}]);