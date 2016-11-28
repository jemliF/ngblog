'use strict';

ngblog.service('AuthorService', function ($http, $state) {
    var baseUrl = 'http://root:admin@localhost:8080/ngblog/author';

    this.isLoggedIn = function () {
        return localStorage.getItem('user');
    }
    this.logout = function () {
        localStorage.removeItem('user');
        $state.go('login');
    }

    this.new = function (author) {
        var currentdate = new Date();
        var datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        author.created_at = datetime;
        return $http.post(baseUrl, author);
    }

    this.getAuthorById = function (id) {
        return $http.get(baseUrl + '/' + id);
    }

    this.findByEmailAndPassword = function (email, password) {
        var query = {
            "query": {
                "filtered": {
                    "query": {
                        "match": {
                            "email": email
                        }
                    },
                    "filter": {
                        "query": {
                            "match": {
                                "password": password
                            }
                        }
                    }
                }
            }
        }
        console.log('query: ', JSON.stringify(query));
        return $http.post(baseUrl + '/_search', query);
    }
});