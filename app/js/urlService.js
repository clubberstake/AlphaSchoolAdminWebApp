/* global id */
app.factory('UrlService', ['$http', function($http) {

    var baseUrl = 'http://localhost:61581/api/';

    var adminDeleteAccountGetScreenData = function() {
        var promise = $http.get(baseUrl + 'DeleteAccount').success(function(data) {
            return data;
        });

        return promise;
    };

    var adminDeleteAccountDelete = function(id, lastName) {
        var promise = $http.delete(baseUrl + 'DeleteAccount' + '/?id=' + id + '&lastName=' + lastName).success(function(data) {
            return data;
        });

        return promise;
    };

    var valuesControllerSamplePost = function(student) {
        var promise = $http.post(baseUrl + 'values', JSON.stringify(student)).success(function(data) {
            return data;
        });

        return promise;
    };

    var sampleTeacherHomepagePost = function(teacher) {
        var promise = $http.post(baseUrl + 'values', JSON.stringify(teacher)).success(function(data) {
            return data;
        });

        return promise;
    };

    var teacherHomepageGetTeacherInfo = function() {
        var promise = $http.get(baseUrl + 'TeacherHomepage').success(function(data) {
            return data;
        });

        return promise;
    };

    var studentCalendarEventGetScreenData = function(id) {
        console.log('Attempting studentCalendarEventGetScreenData get');
        var promise = $http.get(baseUrl + 'CalendarEvent/id' + id).success(function(data) {

            return data;
        });

        return promise;
    };

    var adminAddAccountPostScreenData = function(admin) {
        console.log('Attempting adminAddAccountPostPost post');
        var promise = $http.post(baseUrl + 'AddAccount', JSON.stringify(admin)).success(function(data) {
            return data;
        });

        return promise;

    }
    var adminAddCourseGetScreenData = function() {
        var promise = $http.get(baseUrl + 'AddCourse').success(function(data) {
            return data;
        });

        return promise;

    };

    var adminAddCoursePostScreenData = function(course) {
        console.log('Attempting adminAddCoursePostPost post');
        var promise = $http.post(baseUrl + 'AddCourse', JSON.stringify(course)).success(function(data) {
            return data;
        });

        return promise;

    };

    var studentHomeworkAssignmentGetScreenData = function(id) {
        console.log('Attempting studentHomeworkAssignmentGetScreenData get');
        var promise = $http.get(baseUrl + 'HomeworkAssignment/id' + id).success(function(data) {

            return data;
        });

        return promise;

    };

    var studentAnnouncementGetScreenData = function(id) {
        console.log('Attempting studentAnnouncementGetScreenData get');
        var promise = $http.get(baseUrl + 'Announcement/id=' + id).success(function(data) {
            return data;
        });

        return promise;
    };

    return {
        valuesControllerSamplePost: valuesControllerSamplePost,
        adminDeleteAccountGetScreenData: adminDeleteAccountGetScreenData,
        adminDeleteAccountDelete: adminDeleteAccountDelete,
        adminAddAccountPostScreenData: adminAddAccountPostScreenData,
        adminAddCourseGetScreenData: adminAddCourseGetScreenData,
        adminAddCoursePostScreenData: adminAddCoursePostScreenData,
        sampleTeacherHomepagePost: sampleTeacherHomepagePost,
        teacherHomepageGetTeacherInfo: teacherHomepageGetTeacherInfo,
        studentCalendarEventGetScreenData: studentCalendarEventGetScreenData,
        studentHomeworkAssignmentGetScreenData: studentHomeworkAssignmentGetScreenData,
        studentAnnouncementGetScreenData: studentAnnouncementGetScreenData

    };
}]);