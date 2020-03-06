'use strict';

const optionProcessing = require('./optionProcessing');

function toFileName(options) {
    let pattern = optionProcessing.getStringOrField(options, 'fileName');

    return {process: function(incomingNumber, emitItem, emitError, emitComplete) {
    
        let fileName = pattern.replace('{0}', incomingNumber.toString());
        emitItem(fileName);
        emitComplete();
    }};
}

function toFizzBuzz() {
    
    return {process: function(incomingNumber, emitItem, emitError, emitComplete) {

        let replacementText = "";
        replacementText += (incomingNumber % 3) == 0 ? "Fizz" : "";
        replacementText += (incomingNumber % 5) == 0 ? "Buzz" : "";
        emitItem(replacementText.length === 0 ? incomingNumber : replacementText);
        emitComplete();
    }};

}

module.exports.toFileName = toFileName;
module.exports.toFizzBuzz = toFizzBuzz;
