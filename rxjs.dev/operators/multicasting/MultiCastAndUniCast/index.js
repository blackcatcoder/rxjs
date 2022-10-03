const {  Subject, Observable, tap, connect, merge, mergeWith, map, filter, interval, take  } = rxjs;


// unicast
const observable = new Observable(subscriber => {
    subscriber.next(Math.random()),
    subscriber.next(Math.random())
});

observable.subscribe((data) => console.log("uni cast 1: ", data));
observable.subscribe((data) => console.log("uni cast 2: ", data));

// multi cast
console.log("--------------------")
const subject = new Subject();

subject.subscribe((data) => console.log("multi cast 1: ", data));
subject.subscribe((data) => console.log("multi cast 2: ", data));

subject.next(Math.random());
subject.next(Math.random());

/*
conclusion

Unicast observable - an observable whose emitted values are not shared amongst subscribers.
Multicast observable - an observable whose emitted values are shared amongst subscribers.

*/