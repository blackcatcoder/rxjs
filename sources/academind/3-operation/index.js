const { Observable, throttleTime, map, interval } = rxjs;

// create observer and put value to it each second
const observable = interval(1000);

// here i only provide next function
const observer = (data) => console.log(data);

const subscription = observable
    .pipe(
        map(data => data), // it is easy like in java
        throttleTime(1000) // at the time in this throttle it will remove out of pipe
    )
    .subscribe(observer);

setTimeout(() => {
    subscription.unsubscribe();
}, 10000);
