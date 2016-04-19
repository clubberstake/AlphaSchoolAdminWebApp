app.controller('CreateEmailController', ['$scope', '$location','ContactControllerService',
    function ($scope, $location,ContactControllerService ) {

$scope.navigateTeacherContactControllerAccount = function() {
            $location.path('/teacherCreateHomeworkController');
        };


 ContactControllerService.post().then(function(responseObj) {
            console.log('Attempting valuesControllerSamplePost post');
            console.log(responseObj.data);
        });
  }]);

app.factory('ContactControllerService', ['$http', 'UrlService', function($http, UrlService) {


var postData = function() {
        var contact = { "ID": "12345", "LastName": "The Tank", "FirstName": "Frank", "FullName": "Frank The Tank", "Courses": null }
        return UrlService.valuesControllerSamplePost(teacher);
    };

    return {
        post: postData,
    };
}]);