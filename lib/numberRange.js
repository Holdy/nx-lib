'use strict';

const optionProcessing = require('./optionProcessing');

function emitEachNumber(options) {

    return {process: function(numberRange, emitItem, emitError, emitComplete) {
        let startNumber;
        let endNumber;
        let error;

        if (optionProcessing.hasValue(numberRange.start)) {
            startNumber = numberRange.start;
        } else {
            error = "start parameter is required";
        }
        
        if (optionProcessing.hasValue(numberRange.end)) {
            endNumber = numberRange.end;
        } else {
            error = "end parameter is required;"
        }

        if (error) {
            emitError(error);
        } else {
            if ( startNumber < endNumber ) {
                for(let i = startNumber; i <= endNumber; i++) {
                    emitItem(i);
                }
            } else {
                for(let i = startNumber; i >= endNumber; i--) {
                    emitItem(i);
                }
            }
        }
        emitComplete();
    }};
}

module.exports.emitEachNumber = emitEachNumber;

