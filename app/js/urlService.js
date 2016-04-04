app.factory('UrlService', ['$http', function($http) {

    var baseUrl = 'http://localhost:61581/api/';

    var adminDeleteAccountGetScreenData = function() {
        console.log('Attempting adminDeleteAccountGetScreenData get');
        var promise = $http.get(baseUrl + 'values').success(function(data) {
            return data;
        });

        return promise;
    };

    var adminDeleteAccountPostDelete = function(student) {
        console.log('Attempting adminDeleteAccountPostDelete post');
        var promise = $http.post(baseUrl + 'values', JSON.stringify(student)).success(function(data) {
            return data;
        });

        return promise;
    };

    return {
        adminDeleteAccountGetScreenData: adminDeleteAccountGetScreenData,
        adminDeleteAccountPostDelete: adminDeleteAccountPostDelete
    }

}]);