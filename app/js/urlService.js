app.factory('UrlService', ['$http', function ($http) {

    var baseUrl = 'http://localhost:61581/api/';

<<<<<<< HEAD
    var adminDeleteAccountGetScreenData = function () {
        console.log('Attempting adminDeleteAccountGetScreenData get');
        var promise = $http.get(baseUrl + 'values').success(function (data) {
=======
    var adminDeleteAccountGetScreenData = function() {
        var promise = $http.get(baseUrl + 'DeleteAccount').success(function(data) {
>>>>>>> a17878e226979eb573c9bf40f134038619aab219
            return data;
        });

        return promise;
    };

<<<<<<< HEAD
    var adminDeleteAccountPostDelete = function (student) {
        console.log('Attempting adminDeleteAccountPostDelete post');
        var promise = $http.post(baseUrl + 'values', JSON.stringify(student)).success(function (data) {
=======
    var adminDeleteAccountDelete = function(id, lastName) {
        var promise = $http.delete(baseUrl + 'DeleteAccount' + '/?id=' + id + '&lastName=' + lastName).success(function(data) {
            return data;
        });

        return promise;
    };

    var valuesControllerSamplePost = function(student) {
        var promise = $http.post(baseUrl + 'values', JSON.stringify(student)).success(function(data) {
>>>>>>> a17878e226979eb573c9bf40f134038619aab219
            return data;
        });

        return promise;
    };
    
    var studentCalendarEventGetScreenData = function () {
        console.log('Attempting studentCalendarEventGetScreenData get');
        var promise = $http.get(baseUrl + 'CalendarEvent').success(function (data) {
            return data;
        });

        return promise;
    };
    
    return {
        valuesControllerSamplePost: valuesControllerSamplePost,
        adminDeleteAccountGetScreenData: adminDeleteAccountGetScreenData,
<<<<<<< HEAD
        adminDeleteAccountPostDelete: adminDeleteAccountPostDelete,
        studentCalendarEventGetScreenData: studentCalendarEventGetScreenData
    };
=======
        adminDeleteAccountDelete: adminDeleteAccountDelete,
        adminAddAccountGetScreenData: adminAddAccountGetScreenData
    }

>>>>>>> a17878e226979eb573c9bf40f134038619aab219
}]);