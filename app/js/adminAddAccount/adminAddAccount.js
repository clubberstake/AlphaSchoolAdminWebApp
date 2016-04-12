app.controller('AdminAddAccountController', ['$scope', '$location',
    function($scope, $location) {


        $scope.navigateAdminAssignAccount = function() {

            $location.path('/adminAssignAccount');
            
        AdminADDAccountService.get().then(function(responseObj) {
            console.log(responseObj);
        });

        AdminAddAccountService.post().then(function(responseObj) {
            console.log(responseObj.data);
            console.log('Account ID -> ' + responseObj.data.AccountID);
        });

        };
    }]);
    
    app.factory('AdminAddAccountService', ['$http', 'UrlService', function($http, UrlService) {

    var getData = function() {
        return UrlService.adminAddAccountGetScreenData();
    };

    var postData = function() {
        var admin = { "AccountID": "12345", "NameLast": "Lurry", "NameFirst": "Kayla", "EmailAddress": "asdjfkljasdkl", "LoginType": "Administrator" }
        return UrlService.adminAddAccountPostDelete(admin);
    };

    return {
        get: getData,
        post: postData
    }

