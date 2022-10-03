const { Observable, fromEvent, map, interval, mergeAll, zip, delay, combineLatestWith, zipAll, of } = rxjs;

// observable
// obs 1
const observable1 = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
});

// obs 2
const observable2 = new Observable(subscriber => {
    subscriber.next(3);
    subscriber.next(4);
});

// zipAll obs
const zipAllObs = of(observable1.pipe(delay(1000)), observable2).pipe(zipAll());


// subscription
const subscriptionZipAll = zipAllObs.subscribe((data) => {
    console.log('zip all');
    console.log(data);
});

// unsubscribe
setTimeout(() => {
    subscriptionZipAll.unsubscribe();
}, 5000);