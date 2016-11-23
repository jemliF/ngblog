'use strict';

ngblog.controller('ArticleController', function ($scope, ArticleService, $state, $stateParams) {
    var vm = this;

    ArticleService.getArticleById($stateParams.id).then(function (res) {
        console.log(res);
        $scope.article = res.data._source;
    }, function (err) {
        console.error(err);
    });
});