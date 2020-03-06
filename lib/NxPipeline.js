'use strict'


function NxPipeline(steps){
    this.steps = steps;
    this.inFlightHead = null;
    this.inFlightTail = null;
}

function nullFunction() {}

NxPipeline.prototype.process = function(dataItem, emitItem, emitError, emitComplete) { 
    // Queue up the item.
    let inFlightItem = {
        dataItem: dataItem, // Item to be processed
        targetStepIndex: 0,  // Step it will be passed into.
        next: null
    };
    addToLinkedList(this, inFlightItem);
    processLinkedList(this, emitItem || nullFunction, emitError || nullFunction, emitComplete || nullFunction);
}

function processLinkedList(owner, emitItem, emitError, emitComplete) {
//TODO avoid stack overflow - timer-next?
    if (owner.inFlightHead) {

        let inFlightItem = owner.inFlightHead;
        owner.inFlightHead = inFlightItem.next;

        let targetStep = owner.steps[inFlightItem.targetStepIndex];
    
        targetStep.process(
            inFlightItem.dataItem, 
            (emittedItem) => {
                let nextStep = inFlightItem.targetStepIndex + 1;
                if (nextStep >= owner.steps.length) {
                    // emit out of pipeline
                    emitItem(emittedItem);
                } else {
                    // queue for next step
                    addToLinkedList(owner, {dataItem: emittedItem, targetStepIndex: nextStep});
                }
            },
            (emittedError) => {
                console.log('BANG - ' + e);
            },
            () => {
                processLinkedList(owner,emitItem, emitError, emitComplete);
            });

    } else {
        emitComplete();
    }

}

function addToLinkedList(owner, item) {
    if (owner.inFlightHead) {
        owner.inFlightTail.next = item;
        owner.inFlightTail = item;
    } else {
        owner.inFlightHead = item;
        owner.inFlightTail = item;
    }

}

module.exports = NxPipeline;