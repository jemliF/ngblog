'use strict';

ngblog.controller('AuthorController', function ($scope, AuthorService, $state, $stateParams) {
    var vm = this;

    AuthorService.getAuthorById($stateParams.id).then(function (res) {
        console.log(res);
        $scope.article = res.data._source;
    }, function (err) {
        console.error(err);
    });
});