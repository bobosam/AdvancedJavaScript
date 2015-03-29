define(["ListModule"], function (ListModule) {
    'use strict';
    var Item = (function () {
        var number = 0;

        function Item(title) {
            number++;
            ListModule.call(this, title);
            this._id = 'item' + number;
        }

        Item.extends(ListModule);

        Item.prototype._buildHtmlElement = function () {
            var div = document.createElement("div");

            var input = document.createElement("input");
            input.type = "checkbox";
            input.id = this._id;

            var label = document.createElement("label");
            label.innerHTML = this._title;
            label.htmlFor = this._id;

            div.appendChild(input);
            div.appendChild(label);

            this._htmlElement = div;
        };

        return Item;
    })();


    return Item;
});
