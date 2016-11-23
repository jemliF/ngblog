'use strict';

ngblog.directive('toolbar', function () {
    function toolbarController(AuthorService) {
        var vm = this;
        vm.authorService = AuthorService;
    }

    return {
        templateUrl: '../../views/toolbar.tmpl.html',
        controllerAs: 'toolbar',
        controller: toolbarController
    }
});