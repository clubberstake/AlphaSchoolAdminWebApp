app.controller('AdminDeleteAccountController', ['$scope', '$location', 'AdminDeleteAccountService',
    function($scope, $location, AdminDeleteAccountService) {

        $scope.navigateAdminAssignAccount = function() {
            $location.path('/adminAssignAccount');
        };

        $scope.navigateAdminAssignAccount = function() {
            $location.path('/adminAddAccount');
        };

        AdminDeleteAccountService.get().then(function(data) {
            console.log('Attempting get');
            console.log(data);
        });

        AdminDeleteAccountService.post().then(function(data) {
            console.log('Attempting post');
            console.log(data);
        });
    }]);

app.factory('AdminDeleteAccountService', ['$http', function($http) {

    var getData = function() {
        var promise = $http.get('http://localhost:61581/api/values').success(function(data) {
            return data;
        });

        return promise;
    };

    var postData = function() {
        var student = { "ID": "12345", "LastName": "The Tank", "FirstName": "Frank", "FullName": "Frank The Tank", "Courses": null }
        var promise = $http.post('http://localhost:61581/api/values', JSON.stringify(student)).success(function(data) {
            return data;
        });

        return promise;
    };

    return {
        get: getData,
        post: postData
    }

}]);