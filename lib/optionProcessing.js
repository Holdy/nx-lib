'use strict';

function getStringOrField(options, fieldName) {
    let result;
    if (typeof options === 'string') {
        result = options;
    } else {
        result = options.directoryName;
    }
    return result;
}

function hasValue(test) {
    return test || test === false || test === 0;
}

module.exports.getStringOrField = getStringOrField;
module.exports.hasValue = hasValue;