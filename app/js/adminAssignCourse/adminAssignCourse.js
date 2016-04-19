app.controller('AdminAssignCourseController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.courseList = [{ name: 'Science' }, { name: 'Math' }, { name: 'Spelling' }, { name: 'Reading' }];
        $scope.selectedCourse = '';        
    }]);