'use strict';

ngblog.service('ArticleService', function ($http) {
    var baseUrl = 'http://root:admin@localhost:8080/ngblog/article';

    this.new = function (article) {
        var currentdate = new Date();
        var datetime = currentdate.getFullYear() + "-"
            + (currentdate.getMonth() + 1) + "-"
            + currentdate.getDate() + " "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        article.created_at = datetime;
        article.author = String(localStorage.getItem('user-id'));
        return $http.post(baseUrl, article);
    }

    this.getAllArticles = function () {
        var query = {
            query: {
                match_all: {}
            }
        }
        return $http.post(baseUrl + '/_search', query);
    }

    this.getArticleById = function (id) {
        return $http.get(baseUrl + '/' + id);
    }

    this.findByTitleOrContent = function (text) {
        var query = {
            "query": {
                "filtered": {
                    "query": {
                        "match_all": {}
                    },
                    "filter": {
                        "or": [
                            {
                                "term": {
                                    "title": text
                                }
                            },
                            {
                                "term": {
                                    "content": text
                                }
                            }
                        ]
                    }
                }
            }
        };
        return $http.post(baseUrl + '/_search', query);
    }
});