const { Observable, fromEvent, map, interval, mergeAll, zip, delay, combineLatestWith, combineLatest } = rxjs;

// link
// https://indepth.dev/reference/rxjs/operators/zip

// observer
const observer = {
    next: (data) => console.log(data),
    error: (error) => console.log('error'),
    complete: () => console.log('complete')
}


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

// zip obs
const zipObs = zip(observable1.pipe(delay(1000)), observable2);

// combineLatest obs
const combineLatestObs = combineLatest(observable1.pipe(delay(1000)), observable2);

// combineLatestWith obs
const combineLatestWithObs = observable1.pipe(delay(1000), combineLatestWith(observable2)); 


// subscription
const subscriptionZip = zipObs.subscribe((data) => {
    console.log('zip');
    console.log(data);
});

const subscriptionCombineLatest = combineLatestObs.subscribe((data) => {
    console.log('combineLatest');
    console.log(data);
});

const subscriptionCombineLatestWith = combineLatestWithObs.subscribe((data) => {
    console.log('combineLatestWith');
    console.log(data);
});

// differences zip, combineLatestWith
// combineLatestWith: get data from 2 observables and only get latest value
// zip: get data from 2 observables do not care latest value

// unsubscribe
setTimeout(() => {
    subscriptionZip.unsubscribe();
    subscriptionCombineLatest.unsubscribe();
    subscriptionCombineLatestWith.unsubscribe();
}, 5000);