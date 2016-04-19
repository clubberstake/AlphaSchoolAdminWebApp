app.controller('CreateCalendarEventController', ['$scope', '$location','CreateCalendarEventService',
    function ($scope, $location,  CreateCalendarEventService) {
$scope.selectrecip=[
    {name:'class', value:'1'},
    {name:'grade', value:'2'},
    {name:'teacher', value:'3'}
];
$scope.selectrecip =0;

$scope.navigateTeacherCreateCalendarEventControllerAccount = function() {
            $location.path('/teacherCreateCalendarEventController');
        };

        $scope.navigateTeacherAnnouncementControllerAccount = function() {
            $location.path('/teacherCreateAnnouncementController');
        };

        TeacherCreateCalendarEventService.get().then(function(responseObj) {
            console.log('Attempting teacherCreateCalendarEvent get');
            console.log(responseObj.data);
        });

        TeacherCreateCalendarEventService.post().then(function(responseObj) {
            console.log('Attempting valuesControllerSamplePost post');
            console.log(responseObj.data);
        });
    }]);

app.factory('CreateCalendarEventControllerService', ['$http', 'UrlService', function($http, UrlService) {

    var getData = function() {
         var id = "12345";
        return UrlService.CreateCalendarEventGetData();
    };


    var postData = function() {
        var calendar = { "ID": "12345", "LastName": "The Tank", "FirstName": "Frank", "FullName": "Frank The Tank", "Courses": null }
        return UrlService.valuesControllerSamplePost(calendar);
    };

    return {
        get: getData,
        post: postData,
    }

    }]);
    