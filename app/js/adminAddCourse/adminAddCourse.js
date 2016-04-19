app.controller('AdminAddCourseController', ['$scope', '$location', 'AdminAddCourseService',
    function($scope, $location, AdminAddCourseService) {


        $scope.navigateAdminAssignAccount = function() {

            $location.path('/adminAssignAccount');

        };

        $scope.navigateAdminAssignAccount = function() {

            $location.path('/adminAddAccount');

        };
        AdminAddCourseService.get().then(function(responseObj) {
            console.log('Attempting adminAddCourse get');
            console.log(responseObj.data);
        });
        AdminAddCourseService.post().then(function(responseObj) {
            console.log('Attempting adminAddCoursePostScreenData post');
            console.log(responseObj.data);
        });
    }]);
app.factory('AdminAddCourseService', ['$http', 'UrlService', function($http, UrlService) {

    var getData = function() {
        return UrlService.adminAddCourseGetScreenData();
    };

    var postCourse = function() {
        var course = { "ID": "987654321", "CourseName": "Operating Systems", "Grade": 1}
        return UrlService.adminAddCoursePostScreenData(course);
    };
    return {
        get: getData,
        post: postCourse
    }
}]);