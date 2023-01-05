const { Observable, Subject, fromEvent, of, throttleTime, map, interval, debounceTime, distinctUntilChanged, reduce, scan, pluck } = rxjs;

// https://www.youtube.com/watch?v=QbNUD5ca99A&list=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi&index=7

const input = document.getElementById('inputId');

const observable = fromEvent(input, 'input');

const observer = {
    next: (data) => console.log(data)
};

// debounceTime
// distinctUntilChanged
const subscription = observable
    .pipe(
        map(event => event.target.value),
        debounceTime(2000),// only get the last event value of after 2s
        distinctUntilChanged() // do not send if the value change same with last value
    )
    .subscribe(observer);


// setTimeout(() => {
//     subscription.unsubscribe();
// }, 5000);

// -------------------------------------------------------------------------
// scan and reduce -> same same but difference
// reduce like sum of all number, if you just want to care final result
// scan same same with reduce but it will show all the step from start to final result
const observable2 = of(1,2,3);
const observer2 = {
    next: (data) => console.log(data)
};
const subscription2 = observable2
    .pipe(
        reduce((total, current) => {
            return total + current;
        }, 0),
        // scan((total, current) => {
        //     return total + current;
        // }, 0)
    )
    .subscribe(observer2);



// -------------------------------------------------------------------------
// pluck()
// to solve the same problem of debounce and distinctUntilChanged
const observer3 = {
    next: (data) => console.log('demo3: ', data)
};
const subscription3 = observable
    .pipe(
        pluck('target', 'value'),
        debounceTime(2000),
        distinctUntilChanged() 
    )
    .subscribe(observer);



