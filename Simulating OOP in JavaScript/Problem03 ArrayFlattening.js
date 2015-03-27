Array.prototype.flatten = function(){
    var newArray = [];
    function extracts(arr){
        for (var index = 0; index < arr.length; index++) {
            var value = arr[index];
            if (value instanceof Array) {
                extracts(value);
            } else {
                newArray.push(value);
            }
        }
    }

    extracts(this);
    return newArray;
}

var array = [1, 2, 3, 4];
console.log(array.flatten());
console.log();
var array = [1, 2, [3, 4], [5, 6]];
console.log(array.flatten());
console.log(array); // Not changed
console.log();
var array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());
console.log(array);
