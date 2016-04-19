/* global id */
app.factory('UrlService', ['$http', function ($http) {

    var baseUrl = 'http://localhost:61581/api/';

    var adminDeleteAccountGetScreenData = function () {
        var promise = $http.get(baseUrl + 'DeleteAccount').success(function (data) {
            return data;
        });

        return promise;
    };

    var adminDeleteAccountDelete = function (id, lastName) {
        var promise = $http.delete(baseUrl + 'DeleteAccount' + '/?id=' + id + '&lastName=' + lastName).success(function (data) {
            return data;
        });

        return promise;
    };

    var valuesControllerSamplePost = function (student) {
        var promise = $http.post(baseUrl + 'values', JSON.stringify(student)).success(function (data) {
            return data;
        });

        return promise;
    };

    var studentCalendarEventGetScreenData = function (id) {
        console.log('Attempting studentCalendarEventGetScreenData get');
        var promise = $http.get(baseUrl + 'CalendarEvent/id' + id).success(function (data) {
            return data;
        });

        return promise;
    };

    var studentHomeworkAssignmentGetScreenData = function (id) {
        console.log('Attempting studentHomeworkAssignmentGetScreenData get');
        var promise = $http.get(baseUrl + 'HomeworkAssignment/id' + id).success(function (data) {
            return data;
        });

        return promise;
    };

    var studentAnnouncementGetScreenData = function (id) {
        console.log('Attempting studentAnnouncementGetScreenData get');
        var promise = $http.get(baseUrl + 'Announcement/id=' + id).success(function (data) {
            return data;
        });

        return promise;
    };

    return {
        valuesControllerSamplePost: valuesControllerSamplePost,
        adminDeleteAccountGetScreenData: adminDeleteAccountGetScreenData,
        adminDeleteAccountDelete: adminDeleteAccountDelete,
        studentCalendarEventGetScreenData: studentCalendarEventGetScreenData,
        studentHomeworkAssignmentGetScreenData: studentHomeworkAssignmentGetScreenData,
        studentAnnouncementGetScreenData: studentAnnouncementGetScreenData
    }

}]);