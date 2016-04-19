app.controller('ViewCalendarEventController', ['$scope', '$location', 'StudentCalendarEventService', 
    function ($scope, $location, StudentCalendarEventService) {

    
      $scope.navigateCreateHomeworkAssignment = function () {

            $location.path('/viewHomeworkAssignment');

        };
      
        

        $scope.navigateCreateAnnouncement = function () {

            $location.path('/viewAnnouncement');

        };
       StudentCalendarEventService.get().then(function (responseObj) {
            console.log('Attempting studentCalendarEvent get');
            console.log(responseObj.data);
        });
        
    }]);
    
    

app.factory('StudentCalendarEventService', ['$http', 'UrlService', function ($http, UrlService) {

    var getData = function () {
         var id = '12345';
        return UrlService.studentCalendarEventGetScreenData(id);
    };

    return {
        get: getData,
    }

    }]);
    
    
    
    