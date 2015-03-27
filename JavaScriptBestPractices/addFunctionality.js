var addFunctionality = (function(){
    'use strict'
    function addNewSection(parent, sectionTitle) {
        var section = new ListModule.Section(sectionTitle);
        section.addToDom(parent);
    }

    function addNewListItem(parent, itemLabel) {
        var listItem = new ListModule.ListItem(itemLabel);
        listItem.addToDom(parent);
    }

    return {
        addNewSection : addNewSection,
        addNewListItem : addNewListItem
    }
}());