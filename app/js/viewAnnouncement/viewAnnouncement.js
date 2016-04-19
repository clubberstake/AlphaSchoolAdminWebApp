app.controller('ViewAnnouncementController', ['$scope', '$location', 'StudentAnnouncementService',
    function ($scope, $location, StudentAnnouncementService) {
        $scope.navigateStudentAnnouncement = function () {
            $location.path('/studentAnnouncement');
        };

        StudentAnnouncementService.get().then(function (responseObj) {
            console.log('Attempting studentAnnouncement get');
            console.log(responseObj.data);
        });

    }]);

app.factory('StudentAnnouncementService', ['$http', 'UrlService', function ($http, UrlService) {

    var getData = function () {
        var id = '12345';
        return UrlService.studentAnnouncementGetScreenData(id);
    };

    return {
        get: getData,
    }

}]);