var imdb = imdb || {};

(function(scope){
    'use strict';
    var id = 1;
    function Theatre (name, length, rating, country){
        scope._Movie.apply(this, arguments);
        this.name = name;
        this.isPuppet = false;
        this._id = id;
        id +=1;
    }

    Theatre.extend(scope._Movie);

    scope.getTheatre = function(name, length, rating, country){
        return new  Theatre(name, length, rating, country);
    };
}(imdb));