'use strict';

const nx = require('../index');

 
nx.buildPipeline(
    nx.numberRange.emitEachNumber(),
    nx.number.toFizzBuzz(),
    nx.any.writeToConsole()
).process({start:1, end:100});

 

const testPipe = nx.buildPipeline(
    nx.numberRange.emitEachNumber(),
    nx.number.toFileName('go-{0}-go'),
    nx.any.writeToConsole()
);


testPipe.process({start:1, end:1000}, null, null, () => {
   console.log('done');
});