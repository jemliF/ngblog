'use strict';

ngblog.controller('NewController', function ($scope, ArticleService, $state, $mdToast) {
    var vm = this;
    var toast;
    $scope.title = 'New Article';
    $scope.article = {
        title: '',
        content: '',
        tags: ['put','tags', 'here']
    };

    $scope.new = function () {
        ArticleService.new($scope.article).then(function (res) {
            console.log(res);
            toast = $mdToast.simple()
                .content('Article Created Successfully!')
                .hideDelay(3000)
                .position('top right')
                .parent('new-form');
            $state.go('home');
        }, function (err) {
            console.error(err);
        });
    }
});