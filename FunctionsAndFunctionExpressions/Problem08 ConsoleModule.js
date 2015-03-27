var  specialConsole =(function(){
    function writeLine(){
        var  message = arguments[0];
        if (1 === arguments.length) {
            consoleWrite(message);
        } else if (1 < arguments.length) {
            var args = Array.prototype.slice.call(arguments);
            message = placeholders(message, args.slice(1, args.length));
            consoleWrite(message);
        }
    };

    function placeholders(str, args){
        for (var index = 0; index < args.length; index++) {
            str = str.replace('{' + index +'}', args[index].toString());
        }

        return str
    };

    function consoleWrite(str){
        console.log(str.toString());
    };

    return {
        writeLine: writeLine,
        writeError: writeLine,
        writeWarning: writeLine,
        writeInfo: writeLine
    };
})();

specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0}", "hello");
specialConsole.writeLine("Object: {0}", { name: "Gosho", toString: function() { return this.name } });
specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
specialConsole.writeInfo("Info: {0}", "Hi there! Here is some info for you.");
specialConsole.writeError("Error object: {0}", { msg: "An error happened", toString: function () { return this.msg } });
