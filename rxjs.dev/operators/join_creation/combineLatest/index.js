const { fromEvent, map, interval, mergeMap, switchMap, catchError, take, timer, combineLatest, combineLatestWith } = rxjs;

const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now

const secondTimer = timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now

const combinedTimers = combineLatest([firstTimer, secondTimer]);
const subscription = combinedTimers.subscribe(value => console.log(value));
// Logs
// [0, 0] after 0.5s
// [1, 0] after 1s
// [1, 1] after 1.5s
// [2, 1] after 2s

setTimeout(() => {
    subscription.unsubscribe();
}, 10000);

// ok understood