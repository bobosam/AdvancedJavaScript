function printArgsInfo(){
    console.log(arguments);
    console.log();
    for (var index in arguments) {
        var typeOf = Object.prototype.toString.call(arguments[index]);
        typeOf = typeOf.substring(8, typeOf.length - 1).toLowerCase();
        console.log(arguments[index] + " (" + typeOf + ")");
    }
    console.log("-----------------------------------------------------");
 }

console.log("Problem 1.	Function Arguments\n");
printArgsInfo(2, 3, 2.5, -110.5564, false);
printArgsInfo(null, undefined, "", 0, [], {});
printArgsInfo([1, 2], ["string", "array"], ["single value"]);
printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);
console.log();
console.log("Problem 2. call() and apply()\n");
printArgsInfo.call(null);
printArgsInfo.call(null, "string", 25, [1, 2, 3, 4]);
printArgsInfo.apply(null);
printArgsInfo.apply(null, [ "string", 25, [1, 2, 3, 4]]);

