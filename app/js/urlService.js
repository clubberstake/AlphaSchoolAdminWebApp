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

    var adminAddAccountPostScreenData = function name(params) {
        console.log('Attempting adminAddAccountPostPost post');
        var promise = $http.post(baseUrl + 'AddAccount', JSON.stringify(admin)).success(function(data) {
            return data;
        });

        return promise;

    }

    return {
        adminDeleteAccountGetScreenData: adminDeleteAccountGetScreenData,
        adminDeleteAccountPostDelete: adminDeleteAccountPostDelete,
        adminAddAccountPostScreenData: adminAddAccountPostScreenData
    }

}]);