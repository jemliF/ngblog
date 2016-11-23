'use strict';

ngblog.controller('HomeController', function ($scope, ArticleService, $state) {
    var vm = this;
    $scope.search = '';
    $scope.title = 'Home';
    $scope.results = [];
    ArticleService.getAllArticles().then(function (res) {
        console.log(res);
        $scope.articles = res.data.hits.hits;
    }, function (err) {
        console.error(err);
    });

    $scope.readMore = function (id) {
        $state.go('article', {'id': id});
    }

    $scope.doSearch = function () {
        console.log($scope.search);
        ArticleService.findByTitleOrContent($scope.search).then(function (res) {
            console.log(res);
            $scope.results = res.data.hits.hits;
        }, function (err) {
            console.error(err);
        });
    }
});