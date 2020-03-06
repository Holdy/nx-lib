'use strict';

const fs = require('fs');
const path  = require('path');

const optionProcessing = require('./optionProcessing');

function findFilenamesWithExtension(options) {
    let extension = optionProcessing.getStringOrField(options, 'extension');

    return {process: function(targetDirectoryName, emitItem, emitError, emitComplete) {
    
        fs.readdir(targetDirectoryName, (err, filenameList) => {
            if (err) {
                emitError(err);
            } else {
                filenameList.forEach((fileName => {
                    if (fileName.endsWith(extension)) {
                        emitItem(path.join(targetDirectoryName, fileName));
                    }
                }));
            }
            emitComplete();
        });
    }};
}

module.exports.findFilenamesWithExtension = findFilenamesWithExtension;

