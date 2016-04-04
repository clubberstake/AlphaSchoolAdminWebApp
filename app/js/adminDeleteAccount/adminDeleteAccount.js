app.controller('AdminDeleteAccountController', ['$scope', '$location', 'AdminDeleteAccountService',
    function($scope, $location, AdminDeleteAccountService) {

        $scope.navigateAdminAssignAccount = function() {
            $location.path('/adminAssignAccount');
        };

        $scope.navigateAdminAssignAccount = function() {
            $location.path('/adminAddAccount');
        };

        AdminDeleteAccountService.get().then(function(data) {
            console.log(data);
        });

        AdminDeleteAccountService.post().then(function(data) {
            console.log(data);
        });
    }]);

app.factory('AdminDeleteAccountService', ['$http', 'UrlService', function($http, UrlService) {

    var getData = function() {
        return UrlService.adminDeleteAccountGetScreenData();
    };

    var postData = function() {
        var student = { "ID": "12345", "LastName": "The Tank", "FirstName": "Frank", "FullName": "Frank The Tank", "Courses": null }
        return UrlService.adminDeleteAccountPostDelete(student);
    };

    return {
        get: getData,
        post: postData
    }

}]);