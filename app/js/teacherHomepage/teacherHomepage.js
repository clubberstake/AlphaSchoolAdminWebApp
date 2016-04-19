app.controller('TeacherHomepageController', ['$scope', '$location','TeacherHomepageService',
    function ($scope, $location, TeacherHomepageService) {
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
        
        TeacherHomepageService.get().then(function(responseObj) {
            console.log('Attempting teacherHomepageGetTeacherInfo get');
            console.log(responseObj.data);
        });

             
          TeacherHomepageService.post().then(function(responseObj) {
            console.log('Attempting sampleTeacherHomepagePost post');
            console.log(responseObj.data);
        });
    }]);

app.factory('TeacherHomepageService', ['$http', 'UrlService', function ($http, UrlService) {

    var postData = function () {
        var teacher = { 'ID': '9434490', 'LastName': 'Pusateri', 'FirstName': 'Bret' }
        return UrlService.sampleTeacherHomepagePost(teacher);
    };
    
    var getData = function() {
        return UrlService.teacherHomepageGetTeacherInfo();
    };

    return {
        get: getData,
        post: postData
    }

}]);