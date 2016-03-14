var app = angular.module('alphaAdminWebApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'app/js/home/home.html',
        controller: 'HomeController'
    })
        .when('/createHomeworkAssignment', {
            templateUrl: 'app/js/createHomeworkAssignment/createHomeworkAssignment.html',
            controller: 'CreateHomeworkAssignmentController'
        })
        .when('/createAnnouncement', {
            templateUrl: 'app/js/createAnnouncement/createAnnouncement.html',
            controller: 'CreateAnnouncementController'

        })
        .when('/createCalendarEvent', {
            templateUrl: 'app/js/createCalendarEvent/createCalendarEvent.html',
            controller: 'CreateCalendarEventController'
        })
        .when('/teacherHomepage', {
            templateUrl: 'app/js/teacherHomepage/teacherHomepage.html',
            controller: 'TeacherHomepageController'
        })
        .when('/viewHomeworkAssignment', {
            templateUrl: 'app/js/viewHomeworkAssignment/viewHomeworkAssignment.html',
            controller: 'ViewHomeworkAssignmentController'
        })
        .when('/viewAnnouncement', {
            templateUrl: 'app/js/viewAnnouncement/viewAnnouncement.html',
            controller: 'ViewAnnouncementController'

        })
        .when('/viewCalendarEvent', {
            templateUrl: 'app/js/viewCalendarEvent/viewCalendarEvent.html',
            controller: 'ViewCalendarEventController'
        })
        .when('/adminAssignCourse', {
            templateUrl: 'app/js/adminAssignCourse/adminAssignCourse.html',
            controller: 'AdminAssignCourseController'
        })
        .when('/adminAddAccount', {
            templateUrl: 'app/js/adminAddAccount/adminAddAccount.html',
            controller: 'AdminAddAccountController'
        })
        .when('/adminAddCourse', {
            templateUrl: 'app/js/adminAddCourse/adminAddCourse.html',
            controller: 'AdminAddCourseController'
        })
        .when('/adminDeleteAccount', {
            templateUrl: 'app/js/adminDeleteAccount/adminDeleteAccount.html',
            controller: 'AdminDeleteAccountController'
        })
         .when('/createEmail', {
            templateUrl: 'app/js/createEmail/createEmail.html',
            controller: 'createEmailController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);
