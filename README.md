# Nx - Simple Pipelines

Here's FizzBuzz as a pipeline:

```
const nx = require('nx-lib');

nx.buildPipeline(
    nx.numberRange.emitEachNumber(),
    nx.number.toFizzBuzz(),
    nx.any.writeToConsole()
).process({start:1, end:100});
```
