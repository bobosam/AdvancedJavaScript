String.prototype.startsWith = function(substring){
    if (this.length < substring.length) {
        return false;
    }

    for (var indexString = 0; indexString < substring.length; indexString++) {
        if (this[indexString] != substring[indexString]) {
            return false;
        }
    }

    return true;
};

String.prototype.endsWith = function(substring){
    if (this.length < substring.length) {
        return false;
    }

    var indexSub = 0;
    for (var indexString = this.length - substring.length; indexString < this.length; indexString++) {
            if (this[indexString] != substring[indexSub] ) {
            return false;
        }

        indexSub++;
    }

    return true;
};

String.prototype.left = function(count){
    return this.substr(0, count);
}

String.prototype.right = function(count){
    if (count > this.length) {
        return this.toString();
    } else {
        return this.substr(this.length - count, count);
    }
}

String.prototype.repeat = function(count){
    var result = [];
    for (var i = 0; i < count; i++) {
        result[i] = this;
    }

    return result.join("");
}

String.prototype.padLeft = function(count, character){
    var char = character || " ";
    var result = char.repeat(count) + this;
    return result;
}

String.prototype.padRight = function(count, character){
    var char = character || " ";
    var result =this + char.repeat(count);
    return result;
}

var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));
console.log();
console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.startsWith("something else"));
console.log();
console.log(example.left(9));
console.log(example.left(90));
console.log();
console.log(example.right(9));
console.log(example.right(90));
console.log();
// Combinations must also work
var example = "abcdefgh";
console.log(example.left(5).right(2));
console.log();
var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));
console.log();
var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));
console.log();
// Another combination
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));



