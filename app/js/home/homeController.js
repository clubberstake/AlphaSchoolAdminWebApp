app.controller('HomeController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.entryBox = '';

        $scope.nagvigateHomePage = function name() {
            if ($scope.entryBox == 'student') {
                $location.path('/studentHomepage');
                return;
            }

            if ($scope.entryBox == 'teacher') {
                $location.path('/teacherHomepage');
                return;
            }

            if ($scope.entryBox == 'admin') {
                $location.path('/adminAddAccount');
                return;
            }

            $scope.entryBox = 'Do better.';
        }
    }]);