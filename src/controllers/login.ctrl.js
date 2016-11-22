'use strict';

ngblog.controller('LoginController', function ($scope, AuthorService, $mdToast, $state) {
    var vm = this;
    $scope.author = {
        email: '',
        password: ''
    };
    $scope.title = 'Login';
    var toast;

    $scope.login = function () {
        console.log($scope.author);
        AuthorService.findByEmailAndPassword($scope.author.email, $scope.author.password).then(function (res) {
            console.log(res);
            if (res.data.hits.total > 0) {
                localStorage.setItem('user', JSON.stringify(res.data.hits.hits[0]._source));
                toast = $mdToast.simple()
                    .content('Welcome!')
                    .hideDelay(3000)
                    .position('top right')
                    .parent('login-form');
                $mdToast.show(toast);
                $state.go('home');
            } else {
                toast = $mdToast.simple()
                    .content('Login failed!')
                    .hideDelay(3000)
                    .position('top right')
                    .parent('login-form');
                $mdToast.show(toast);
            }
        }, function (err) {
            console.error(err);
            toast = $mdToast.simple()
                .content('Login failed!')
                .hideDelay(3000)
                .position('top right')
                .parent('login-form');
            $mdToast.show(toast);
        });
    }
});