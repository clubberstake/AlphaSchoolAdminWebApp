app.controller('AdminAddAccountController', ['$scope', '$location', 'AdminAddAccountService',
    function($scope, $location, AdminAddAccountService) {


        $scope.navigateAdminAssignAccount = function() {

            $location.path('/adminAssignAccount');

        };

        AdminAddAccountService.post().then(function(responseObj) {
            console.log(responseObj.data);
            console.log('LoginType -> ' + responseObj.data.LoginType);
        });

    }]);

app.factory('AdminAddAccountService', ['$http', 'UrlService', function($http, UrlService) {

    var postData = function() {
        var admin = { "AccountID": "12345", "NameLast": "Lurry", "NameFirst": "Kayla", "EmailAddress": "asdjfkljasdkl", "LoginType": "Administrator" }
        return UrlService.adminAddAccountPostScreenData(admin);
    };

    return {
        post: postData
    }
}]);

