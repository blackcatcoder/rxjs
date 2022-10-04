const { fromEvent, delay } = rxjs;

const clicks = fromEvent(document, 'click');
const delayedClicks = clicks.pipe(delay(2000)); // each click emitted after 1 second
delayedClicks.subscribe(x => console.log(x));



/*
conclusion


*/