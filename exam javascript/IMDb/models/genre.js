var imdb = imdb || {};

(function (scope) {
    'use strict';
    var id = 1;

    function Genre(name) {
        this.name = name;
        this._movies = [];
        this._id = id;
        id += 1;
    }

    Genre.prototype.addMovie = function addMovie(movie) {
        this._movies.push(movie);
    };

    Genre.prototype.getMovies = function getMovies() {
        return this._movies;
    };

    Genre.prototype.deleteMovie = function deleteMovie(movie) {
        this._movies.remove(movie);
    };

    Genre.prototype.deleteMovieById = function deleteMovieById(id) {
        var movieForDelete;
        this._movies.forEach(function (movie) {
            if (movie._id === id) {
                movieForDelete = movie;
            }
        });

        this._movies.remove(movieForDelete);
    };

    scope.getGenre = function (name) {
        return new Genre(name);
    }
}(imdb));