var imdb = imdb || {};

(function (scope) {
    'use strict';
    var id = 1;

    function Movie(title, length, rating, country) {
        this.title = title;
        this.length = length;
        this.rating = rating;
        this.country = country;
        this._actors = [];
        this._reviews = [];
        this._id = id;
        id += 1;
    }

    Movie.prototype.addActor = function addActor(actor) {
        this._actors.push(actor);
    };

    Movie.prototype.getActors = function getActors() {
        return this._actors;
    };

    Movie.prototype.addReview = function addReview(review) {
        this._reviews.push(review);
    };

    Movie.prototype.deleteReview = function deleteReview(review) {
        this._reviews.remove(review);
    };

    Movie.prototype.getReviews = function getReviews() {
        return this._reviews;
    };

    Movie.prototype.deleteReviewById = function deleteReviewById(id) {
        var reviewForDelete;
        this._reviews.forEach(function (review) {
            if (review._id === id) {
                reviewForDelete = review;
            }
        });

        this._reviews.remove(reviewForDelete);
    };

    scope._Movie = Movie;

    scope.getMovie = function (title, length, rating, country) {
        return new Movie(title, length, rating, country);
    };
}(imdb));