'use strict';

const NxPipeline = require('./lib/NxPipeline');


// Note that a nx.pipeline 
// has a the same arguments as a single function:
//    process(dataItem, emitItem, emitError, emitComplete) 
// meaning a prebuilt 'sub-pipeline' can be used as a step
// (and perhaps some steps are built with pipelines!)

/*
nx.directoryname.findMatchingFilename()
nx.filename.loadText()
nx.text.findJson()
nx.json.matchJson()
nx.json.extractStoreInfoAsjson()
nx.json.writeFilename()
*/



function buildPipeline() {
    let steps = [];
    for(let i = 0; i < arguments.length; i++) {
        steps.push(arguments[i]);
    }

    return new NxPipeline(steps);
}

module.exports.buildPipeline = buildPipeline;

module.exports.directoryName = require('./lib/directoryName');
module.exports.numberRange   = require('./lib/numberRange');
module.exports.number        = require('./lib/number');
module.exports.any           = require('./lib/any');

//module.exports.filename = require('./lib/filename');
//module.exports.text = require('./lib/text');
//module.exports.json = require('./lib/json');

