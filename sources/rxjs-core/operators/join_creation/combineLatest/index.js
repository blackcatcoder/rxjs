const { fromEvent, map, interval, mergeMap, switchMap, catchError, take, timer, combineLatest, combineLatestWith } = rxjs;

const observer = {
    next: (data) => console.log(data),
    complete: () => console.log('complete')
}

const firstTimer = timer(0, 1000); //    emit 0, 1, 2... after every second, starting from now
const secondTimer = timer(500, 1000); //    emit 0, 1, 2... after every second, starting after 0,5s from now

const combinedTimers = combineLatest([firstTimer, secondTimer]);
const subscription = combinedTimers.subscribe(observer);

// Logs
// [0, 0] after 0.5s
// [1, 0] after 1s
// [1, 1] after 1.5s
// [2, 1] after 2s

setTimeout(() => {
    subscription.unsubscribe();
    console.log('unsubscribe')
}, 10000);

// ok understood
//