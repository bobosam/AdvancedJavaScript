var domModule = (function(){
    function appendChild(parent, childTag, text){
        var childElement = document.createElement(childTag);
        var parentElement = document.querySelector(parent);
        var node = document.createTextNode(text);
        childElement.appendChild(node);
        parentElement.appendChild(childElement)
    };

    function removeChild(parentSelector, childSelector){
        var parent = document.querySelector(parentSelector);
        var removeElement = document.querySelector(childSelector);
        parent.removeChild(removeElement);
    };

    function addHandler(selector, event, callFunction){
        var element = document.querySelector(selector);
        element.addEventListener(event, callFunction);
    };

    function retrieveElements(selector){
        var elements = document.querySelectorAll(selector);
        return elements;
    };

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    }


})();

domModule.appendChild('.birds-list', 'li', 'Appends a list item to ul.birds-list');
domModule.removeChild('ul.birds-list', 'li:first-child');
domModule.addHandler('#eagle', 'click', function(){ alert('I am a bird!')});