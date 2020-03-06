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

module.exports.toFileName = toFileName;

