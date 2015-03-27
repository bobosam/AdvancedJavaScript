var imdb = imdb || {};

(function(scope){
    'use strict';
    var id = 1;
   function Review(author, content, date){
       this.author = author;
       this.content = content;
       this.date = date;
       this._id = id;
       id += 1;
   }

    scope.getReview = function (author, content, date){
        return new  Review(author, content, date);
    };

}(imdb));