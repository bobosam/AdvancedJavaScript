var add = (function() {
    var sum = 0;

    function add(increment) {
        sum += increment;
        return add;
    }

    add.toString = function() {
        return sum;
    }

    add.init = function() {
         sum = 0;
    }

   return add;
})();

console.log(add(1).toString());
add.init();
console.log(add(2)(3).toString());
add.init();
console.log(add(1)(1)(1)(1)(1).toString());
add.init();
console.log(add(1)(0)(-1)(-1).toString());
add.init();
var addTwo = add(2);
console.log(addTwo.toString());
add.init();
var addTwo = add(2);
console.log(addTwo(3).toString());
add.init();
var addTwo = add(2);
console.log(addTwo(3)(5).toString());




