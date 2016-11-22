'use strict';

ngblog.service('AuthorService', function ($http) {
    var baseUrl = 'http://localhost:9200/ngblog/author';

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