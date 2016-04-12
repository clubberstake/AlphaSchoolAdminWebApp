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

    var adminAddAccountGetScreenData = function name(params) {

    }

    return {
        valuesControllerSamplePost: valuesControllerSamplePost,
        adminDeleteAccountGetScreenData: adminDeleteAccountGetScreenData,
        adminDeleteAccountDelete: adminDeleteAccountDelete,
        adminAddAccountGetScreenData: adminAddAccountGetScreenData
    }

}]);