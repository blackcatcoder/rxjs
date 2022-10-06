const { Observable, fromEvent, takeUntil, interval, defaultIfEmpty } = rxjs;


// example 1
const clicks = fromEvent(document, 'click');
const clicksBeforeFive = clicks.pipe(takeUntil(interval(5000)));
const result = clicksBeforeFive.pipe(defaultIfEmpty('no clicks'));
result.subscribe(x => console.log(x));


// example 2
const observable = new Observable(subscriber => {
     subscriber.complete();
 })
const result2 = observable.pipe(defaultIfEmpty('no clicks'));
result2.subscribe(x => console.log(x));
 



/*
conclusion
- if observable complete but there has no value emit to observable, the value will called

*/