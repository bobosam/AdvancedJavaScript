var module = (function(){
    Object.prototype.extends = function(properties){
        function f(){};
        var prop;
        f.prototype = Object.create(this);
        for (prop in properties){
            f.prototype[prop] = properties[prop];
        };

        f.prototype._super = this;
        return new f();
    }

    var shape = {
        constructor : function constructor(color, x1, y1){
            this.color = color;
            this.x1 = x1;
            this.y1 = y1;
            return this;
        },

        toString : function toString(){
            var result = 'Color: ' + (this.color).toString(16).toUpperCase();
            result += '\n(' + this.x1 + ', ' + this.y1 + ')';
            return result;
        }
    };

    var circle = shape.extends({
        constructor : function constructor(color, x1, y1, r){
            this._super.constructor(color, x1, y1);
            this.r = r;
            return this;
        },

        toString : function toString(){
            var result = this._super.toString();
            result += 'Center point:O' + '\nRadius: ' + this.r;
            return result;
        }
    });

    var rectangle = shape.extends({
        constructor : function constructor(color, x1, y1, width, height){
            this._super.constructor(color, x1, y1);
            this.width = width;
            this.height = height;
            return this;
        },

        toString : function toString(){
            var result = this._super.toString();
            result += 'Top left corner:A';
            result += '\nWidth: ' + this.width + '\nHeight: ' + this.height;
            return result;
        }
    });

    var line = shape.extends({
        constructor : function constructor(color, x1, y1, x2, y2){
            this._super.constructor(color, x1, y1);
            this.x2 = x2;
            this.y2 = y2;
            return this;
        },

        toString : function toString(){
            var result = this._super.toString();
            result += 'Point A' + '\n(' + this.x2 + ', ' + this.y2 + ')Point B';
            return result;
        }
    });

    var segment = line.extends({
        constructor : function constructor(color, x1, y1, x2, y2){
            this._super.constructor(color, x1, y1, x2, y2);
            return this;
        }
    });

    var triangle = line.extends({
        constructor : function constructor(color, x1, y1, x2, y2, x3, y3){
            this._super.constructor(color, x1, y1, x2, y2);
            this.x3 = x3;
            this.y3 = y3;
            return this;
        },

        toString : function toString(){
            var result = this._super.toString();
            result += '\n(' + this.x3 + ', ' + this.y3 + ')Point C';
            return result;
        }
    });

    return {
        shape: shape,
        circle: circle,
        rectangle: rectangle,
        triangle: triangle,
        line: line,
        segment: segment
    }
}());


var circle = Object.create(module.circle).constructor(0xE8F0FF, 5, 4, 6);
console.log('Circle:');
console.log(circle.toString());
console.log('_____________________________________');
var rectangle = Object.create(module.rectangle).constructor(0xFF87D3, 7, 8, 10, 15);
console.log('Rectangle:');
console.log(rectangle.toString());
console.log('_____________________________________');
var line = Object.create(module.line).constructor(0xFFF538, 7, 3, 15, 12);
console.log('Line:');
console.log(line.toString());
console.log('_____________________________________');
var segment = Object.create(module.segment).constructor(0xBAFFDE, 12, 13, 25, 32);
console.log('Segment:');
console.log(segment.toString());
console.log('_____________________________________');
var triangle = Object.create(module.triangle).constructor(0xBAFFDE, 12, 13, 25, 32, 45, 28);
console.log('Triangle:');
console.log(triangle.toString());
console.log('_____________________________________');