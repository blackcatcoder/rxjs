const { fromEvent, of, map,tap, interval, mergeMap, switchMap, concatMap, pipe, take } = rxjs;

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

const showFirstName = document.getElementById("showFirstName");
const showLastName = document.getElementById("showLastName");
const showFullName = document.getElementById("showFullName");


// mergeMap
// merge all event of first observable to each event ob new observable
const observableFirstName = fromEvent(firstName, 'input');
const observableLastName = fromEvent(lastName, 'input');

// const observer = {
//     next: (event) => fullName.textContent = event.target.value
// }
// const subscriptionFirstName = observableFirstName
//     .pipe(map(event => event.target.value))
//     .subscribe(data => showFirstName.textContent = data);

// const subscriptionLastName = observableLastName
//     .pipe(map(event => event.target.value))
//     .subscribe(data => showLastName.textContent = data);

const subscription = observableFirstName
    .pipe(mergeMap(event1 => {
        return observableLastName.pipe(map(event2 => event1.target.value +' ' +event2.target.value))
    }))
    .subscribe(combineValue => showFullName.textContent = combineValue);

console.log("-----------------------normalMap------------------------");
const normalMapObserver= {
    next: val => console.log('normalMap: '+ val),
    error: error => console.log("error: "+error),
    complete: () => console.log("complete")
};
const normalMapButton = document.getElementById("normalMapId");
const normalMapSubscription = 
fromEvent(normalMapButton, 'click')
//of([1, 2])
.pipe((event) => {
    console.log('normal map from pipe 1: '+event);
    return event
})
.pipe(tap(console.log('from tap value')))
.pipe(map(value => {
    console.log('map value');
    return value+1
}))
.pipe((event) => {
    console.log('normal map from pipe 3: '+event);
    return event
})
.subscribe(normalMapObserver);

setTimeout(() => {
    normalMapSubscription.unsubscribe();
}, 50000);


console.log("-----------------------mergeMap------------------------");
const mergeMapObserver= {
    next: val => console.log('mergeMap: '+val),
    error: error => console.log("error: "+error),
    complete: () => console.log("complete")
};
const mergeMapButton = document.getElementById("mergeMapId");
const mergeMapSubscription = 
    fromEvent(mergeMapButton, 'click')
    .pipe((event) => {
        console.log('mergeMap from pipe 1: '+event);
        return event
    })
    .pipe(mergeMap(event => {
            console.log('mergeMap from pipe inside 1: '+event);
            return interval(1000).pipe(take(4));
    }))
    .pipe((event) => {
        console.log('mergeMap from pipe 3: '+event);
        return event
    })
    .subscribe(mergeMapObserver);

setTimeout(() => {
    mergeMapSubscription.unsubscribe();
}, 50000);


//--------------------------------------------------------------------------------------
// concatMap
// waits for each inner observable to complete
// respect the order
// when first observable trigger second observable. it will wait untill second observable finish and then execute second
// each first observable will have each second observable.
console.log("-----------------------concatMap------------------------");
const concatMapObserver= {
        next: val => console.log('concatMap: '+ +(val+1)),
        error: error => console.log("error: "+error),
        complete: () => console.log("complete")
};
const concatMapButton = document.getElementById("concatMapId");
const concatMapSubscription = 
    //fromEvent(concatMapButton, 'click')
    of(1)
    .pipe((event) => {
        console.log('from pipe 1: '+event);
        return event
    })
    .pipe(concatMap(event => {
            console.log('from pipe inside 1: '+event);
            return interval(1000).pipe(take(4));
    }))
    .pipe((event) => {
        console.log('from pipe 3: '+event);
        return event
    })
    .subscribe(concatMapObserver);

setTimeout(() => {
    concatMapSubscription.unsubscribe();
}, 50000);
console.log("-----------------------------------------------");


//--------------------------------------------------------------------------------------
// switchMap
const observable2 = interval(1000);// after 1s it will auto put a value and increase that value to observable
//const observer2 = (data) => console.log(data);
//const subscription2 = observable2.subscribe(observer2);

const button = document.getElementById("buttonId");
const observableButton = fromEvent(button, 'click');

const subscriptionButton = observableButton
    .pipe(switchMap(() => { // auto unsubscribe and then subscribe new latest event in observable
        return observable2
    }))
    .subscribe({next: data => console.log(data), complete: () => console.log('complete')});

setTimeout(() => {
    subscriptionButton.unsubscribe();
}, 50000);


// conclusion 
/*
- when observableButton have new event 
    + it will auto unsubscribe and subscribe new observable 
    + and then return another observable.
*/