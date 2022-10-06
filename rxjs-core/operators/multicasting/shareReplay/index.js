const { interval, take, shareReplay, tap, map, of } = rxjs;


// example 1
const shared$ = interval(2000).pipe(
  tap(x => console.log('Processing: ', x)),
  take(6),
  shareReplay(3)
);

shared$.subscribe(x => console.log('sub A: ', x));
shared$.subscribe(y => console.log('sub B: ', y));

setTimeout(() => {
  shared$.subscribe(y => console.log('sub C: ', y));
}, 11000);


// example 2

const source$ = of(1, 2, 3).pipe(map(x => x), take(2), shareReplay());

source$.subscribe(x => console.log("sub 1: ", x));
source$.subscribe(x => console.log("sub 2: ", x));


// Logs:
// (after ~2000 ms)
// sub A: 0
// sub B: 0
// (after ~4000 ms)
// sub A: 1
// sub B: 1
// (after ~6000 ms)
// sub A: 2
// sub B: 2
// (after ~8000 ms)
// sub A: 3
// sub B: 3
// (after ~10000 ms)
// sub A: 4
// sub B: 4
// (after ~11000 ms, sub C gets the last 3 values)
// sub C: 2
// sub C: 3
// sub C: 4
// (after ~12000 ms)
// sub A: 5
// sub B: 5
// sub C: 5

// conclusion
/*

- using for caching
- make observable from unicast to muticast
- apply for we have subscription subscribe later it can have previous value of same observable.
- run the example to more understand


make cold to hot
make unicast to multicast


*/