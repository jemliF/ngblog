'use strict';

ngblog.config(function ($stateProvider) {
    $stateProvider
        .state({
            name: 'login',
            url: '/login',
            resolve: {
                skipIfAuthenticated: _skipIfAuthenticated
            },
            controller: 'LoginController',
            templateUrl: 'views/login.tmpl.html'
        })
        .state({
            name: 'signup',
            url: '/signup',
            resolve: {
                skipIfAuthenticated: _skipIfAuthenticated
            },
            controller: 'SignUpController',
            templateUrl: 'views/signup.tmpl.html'
        })
        .state({
            name: 'home',
            url: '/home',
            controller: 'HomeController',
            templateUrl: 'views/home.tmpl.html',
            resolve: {
                redirectIfNotAuthenticated: _redirectIfNotAuthenticated
            }
        })
        .state({
            name: 'new',
            url: '/new',
            controller: 'NewController',
            templateUrl: 'views/new.tmpl.html',
            resolve: {
                redirectIfNotAuthenticated: _redirectIfNotAuthenticated
            }
        });
    $stateProvider
        .state("otherwise", {url: '/home'});
});

function _skipIfAuthenticated() {
    return !localStorage.getItem('user');
}

function _redirectIfNotAuthenticated() {
    return localStorage.getItem('user');
}