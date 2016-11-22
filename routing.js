'use strict';

ngblog.config(function ($stateProvider) {
    $stateProvider
        .state({
            name: 'login',
            url: '/login',
            controller: 'LoginController',
            templateUrl: 'views/login.tmpl.html'
        })
        .state({
            name: 'signup',
            url: '/signup',
            controller: 'SignUpController',
            templateUrl: 'views/signup.tmpl.html'
        })
        .state({
            name: 'home',
            url: '/home',
            controller: 'HomeController',
            templateUrl: 'views/home.tmpl.html'
        });
    $stateProvider
        .state("otherwise", {url: '/home'});
});