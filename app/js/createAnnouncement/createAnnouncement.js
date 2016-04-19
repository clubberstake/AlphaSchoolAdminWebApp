app.controller('CreateAnnouncementController', ['$scope', '$location','CreateAnnouncementControllerService',
    function ($scope, $location, CreateAnnouncementControllerService) {

    $scope.navigateTeacherAnnouncementControllerAccount = function() {
            $location.path('/teacherCreateAnnouncementController');
        };

        $scope.navigateTeacherAnnouncementControllerAccount = function() {
            $location.path('/teacherCreateCalendarEventController');
        };

        TeacherCreateAnnouncementControllerService.get().then(function(responseObj) {
            console.log('Attempting teacherCreateAnnouncement get');
            console.log(responseObj.data);
        });

        TeacherCreateAnnouncementControllerService.post().then(function(responseObj) {
            console.log('Attempting valuesControllerSamplePost post');
            console.log(responseObj.data);
        });
    }]);

app.factory('CreateAnnouncementControllerService', ['$http', 'UrlService', function($http, UrlService) {

    var getData = function() {
         var id = "12345";
        return UrlService.CreateAnnouncementControllerGetData(id);
    };


    var postData = function() {
        var announcement = { "ID": "12345", "LastName": "The Tank", "FirstName": "Frank", "FullName": "Frank The Tank", "Courses": null }
        return UrlService.valuesControllerSamplePost(announcement);
    };

    return {
        get: getData,
        post: postData,
    }

}]);