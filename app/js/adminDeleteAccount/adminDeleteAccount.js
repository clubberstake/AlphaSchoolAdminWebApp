app.controller('AdminDeleteAccountController', ['$scope', '$location', 'AdminDeleteAccountService',
    function($scope, $location, AdminDeleteAccountService) {

        $scope.navigateAdminAssignAccount = function() {
            $location.path('/adminAssignAccount');
        };

        $scope.navigateAdminAssignAccount = function() {
            $location.path('/adminAddAccount');
        };

        AdminDeleteAccountService.get().then(function(responseObj) {
            console.log('Attempting adminDeleteAccountDelete get');
            console.log(responseObj.data);
        });
        
        AdminDeleteAccountService.delete().then(function(responseObj) {
            console.log('Attempting adminDeleteAccountDelete delete');
            console.log(responseObj.data);
        });

        AdminDeleteAccountService.post().then(function(responseObj) {
            console.log('Attempting valuesControllerSamplePost post');
            console.log(responseObj.data);
        });
    }]);

app.factory('AdminDeleteAccountService', ['$http', 'UrlService', function($http, UrlService) {

    var getData = function() {
        return UrlService.adminDeleteAccountGetScreenData();
    };

    var deleteAccount = function() {
        var id = '12345';
        var lastName = 'last name'
        return UrlService.adminDeleteAccountDelete(id, lastName);
    };

    var postData = function() {
        var student = { "ID": "12345", "LastName": "The Tank", "FirstName": "Frank", "FullName": "Frank The Tank", "Courses": null }
        return UrlService.valuesControllerSamplePost(student);
    };

    return {
        get: getData,
        post: postData,
        delete: deleteAccount
    }

}]);