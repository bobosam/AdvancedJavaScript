function testContext(){
    console.log(this);
}

console.log("From the global scope");
testContext();

console.log("\nInside another function");
function anotherFunction() {
        return testContext();
}

anotherFunction();

console.log("\nAs an object ");
var asAnObject = new Function('', 'console.log(this);');
asAnObject();


