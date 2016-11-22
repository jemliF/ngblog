'use strict';

ngblog.service('AuthorService', function ($http) {

    this.new = function (author) {
        var currentdate = new Date();
        var datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        author.created_at = datetime;
        return $http.post('http://localhost:9200/ngblog/author', author);
    }
});