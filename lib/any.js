'use strict';


function writeToConsole(options) {

    return {process: function(incomingItem, emitItem, emitError, emitComplete) {
        console.log(incomingItem.toString())
        emitItem(incomingItem);
        emitComplete();
    }};
}

module.exports.writeToConsole = writeToConsole;

