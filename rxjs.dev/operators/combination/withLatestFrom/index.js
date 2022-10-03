const { fromEvent, interval, withLatestFrom} = rxjs;


const clicks = fromEvent(document, 'click');
const timer = interval(1000);

const subscription = timer.subscribe(console.log);

const result = clicks.pipe(withLatestFrom(timer));
result.subscribe(x => console.log(x));


// conclusion
// only get the latest value from second observable

setTimeout(() => {
    subscription.unsubscribe();
}, 10000);