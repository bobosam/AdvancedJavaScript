var Module = (function(){
    Function.prototype.extends = function (parent) {
        if (!Object.create) {
            Object.prototype.create = function (proto) {
                function F() {
                };
                F.prototype = proto;
                return new F;
            };
        }
        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    };

    var Shape = (function () {
        function Shape(color, x1, y1) {
            this._x1 = x1;
            this._y1 = y1;
            this._color = color;
        }

        Shape.prototype.toString = function () {
            var result = 'Color: ' + (this._color).toString(16).toUpperCase();
            result += '\n(' + this._x1 + ', ' + this._y1 + ')';
            return result;
        }

        return Shape;
    }());

    var Circle = (function () {
        function Circle(color, x1, y1, r) {
            Shape.call(this, color, x1, y1);
            this._r = r;
        }

        Circle.extends(Shape);

        Circle.prototype.toString = function () {
            var result = Shape.prototype.toString.call(this);
            result += 'Center point:O' + '\nRadius: ' + this._r;
            return result;
        }

        return Circle;
    }());

    var Rectangle = (function () {
        function Rectangle(color, x1, y1, width, height) {
            Shape.call(this, color, x1, y1);
            this._width = width;
            this._height = height;
        }

        Rectangle.extends(Shape);

        Rectangle.prototype.toString = function () {
            var result = Shape.prototype.toString.call(this);
            result += 'Top left corner:A';
            result += '\nWidth: ' + this._width + '\nHeight: ' + this._height;
            return result;
        }

        return Rectangle;
    }());

    var Line = (function () {
        function Line(color, x1, y1, x2, y2) {
            Shape.call(this, color, x1, y1);
            this._x2 = x2;
            this._y2 = y2;
        }

        Line.extends(Shape);

        Line.prototype.toString = function () {
            var result = Shape.prototype.toString.call(this);
            result += 'Point A' + '\n(' + this._x2 + ', ' + this._y2 + ')Point B';
            return result;
        }

        return Line;
    }());

    var Segment = (function () {
        function Segment(color, x1, y1, x2, y2) {
            Line.call(this, color, x1, y1, x2, y2);
        }

        Segment.extends(Line);

        return Segment;
    }());

    var Triangle = (function () {
        function Triangle(color, x1, y1, x2, y2, x3, y3) {
            Line.call(this, color, x1, y1, x2, y2);
            this._x3 = x3;
            this._y3 = y3;
        }

        Triangle.extends(Line);

        Triangle.prototype.toString = function () {
            var result = Line.prototype.toString.call(this);
            result += '\n(' + this._x3 + ', ' + this._y3 + ')Point C';
            return result;
        }

        return Triangle;
    }());

    return {
        circle: Circle,
        rectangle: Rectangle,
        triangle: Triangle,
        line: Line,
        segment: Segment
    }
}());

var circle = new Module.circle(0xE8F0FF, 55, 44, 66);
console.log('Circle:');
console.log(circle.toString());
console.log('_____________________________________');
var rectangle = new Module.rectangle(0xFF87D3, 7, 8, 10, 15);
console.log('Rectangle:');
console.log(rectangle.toString());
console.log('_____________________________________');
var line = new Module.line(0xFFF538, 7, 3, 15, 12);
console.log('Line:');
console.log(line.toString());
console.log('_____________________________________');
var segment = new Module.segment(0xBAFFDE, 12, 13, 25, 32);
console.log('Segment:');
console.log(segment.toString());
console.log('_____________________________________');
var triangle = new Module.triangle(0xBAFFDE, 12, 13, 25, 32, 45, 28);
console.log('Triangle:');
console.log(triangle.toString());
console.log('_____________________________________');