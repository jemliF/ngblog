'use strict';

ngblog.service('ArticleService', function ($http) {
    var baseUrl = 'http://localhost:9200/ngblog/article';

    this.new = function (article) {
        var currentdate = new Date();
        var datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        article.created_at = datetime;
        article.author = String(localStorage.getItem('user-id'));
        return $http.post(baseUrl, article);
    }
});