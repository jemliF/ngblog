'use strict';

ngblog.controller('SignUpController', function ($scope, AuthorService, $mdToast, $state) {
    var vm = this;
    var author = {};
    var password2 = '';

    $scope.title = 'SignUp';
    var toast;
    $scope.signup = function () {
        AuthorService.new($scope.author).then(function (res) {
            console.log(res);
            toast = $mdToast.simple()
                .content('Account Created Successfully!')
                .hideDelay(3000)
                .position('top right')
                .parent('signup-form');
            $mdToast.show(toast);
            $state.go('login');
        }, function (err) {
            console.error(err);
            toast = $mdToast.simple()
                .content('Error Occured, Please Try Again!')
                .hideDelay(3000)
                .position('top right')
                .parent('signup-form');
            $mdToast.show(toast);
        });
    }
});