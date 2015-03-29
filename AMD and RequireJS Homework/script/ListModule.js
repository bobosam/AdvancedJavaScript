define(function () {
    'use strict';
    Function.prototype.extends = function (parent) {
        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    };

    var ListModule = (function () {
        function ListModule(title) {
            this._setTitle(title);
        }

        ListModule.prototype._setTitle = function (title) {
            if(!title){
                throw new  ReferenceError('The title should not be empty.');
            }

            this._title = title;
        };

        ListModule.prototype.getHtmlElement = function () {
            if (!this._htmlElement) {
                this._buildHtmlElement();
            }

            return this._htmlElement;
        }

        ListModule.prototype._buildHtmlElement = function () {
            this._htmlElement = null;
        };

        ListModule.prototype.addToDOM = function (parentHtmlElement) {
            if (!this._htmlElement) {
                this._buildHtmlElement();
            }

            parentHtmlElement.querySelector('div').appendChild(this._htmlElement);
        };

        return ListModule;
    })();

    return ListModule;
});


