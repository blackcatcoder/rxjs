
const { fromEvent, map, interval, mergeMap, switchMap, catchError, take, combineLatestAll } = rxjs;



// combineLatestAll 

const source$ = interval(1000).pipe(take(2));

const example$ = source$.pipe(
    map(data => 
        interval(1000).pipe(
            map(value => `Result ${data} : ${value}`),
            take(5)
        )
    )
);

const observer = {
    next: (data) => console.log(data),
    error: (error) => console.log("error"),
    complete: () => console.log('complete')
}
const subscription = example$.pipe(combineLatestAll()).subscribe(observer)

setTimeout(() => {
    subscription.unsubscribe();
}, 10000);

// const button = document.getElementById("buttonId");
// const clicks = fromEvent(button, 'click');
// const higherOrder = clicks.pipe(
//     map(() => interval(Math.random() * 2000).pipe(take(3))),
//     take(2)
// );
// const result = higherOrder.pipe(combineLatestAll());
// result.subscribe(x => console.log(x));



// do not understand yet