'use strict';

const nx = require('../index');

console.log('aegaeg');
const testPipe = nx.buildPipeline(
    nx.numberRange.emitEachNumber(),
    nx.number.toFileName("blah{0}.txt"),
    nx.any.writeToConsole()
);

testPipe.process({start:-10, end:10}, null, null, () => {
console.log('done');


});