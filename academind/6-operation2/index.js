const { Observable, Subject, fromEvent, throttleTime, map, interval, debounceTime, distinctUntilChanged } = rxjs;

// https://www.youtube.com/watch?v=QbNUD5ca99A&list=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi&index=7

const input = document.getElementById('inputId');

const observable = fromEvent(input, 'input');

const observer = {
    next: (data) => console.log(data)
};

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