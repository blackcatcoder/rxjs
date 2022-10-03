const { Observable, create, interval, fromEvent, of, range, filter, map, tap, connect, merge, mergeWith } = rxjs;

const source$ = of(1, 2, 3, 4, 5);
const source2$ = of(6,7,8,9,10);


// source$.pipe(mergeWith(
//     source2$.pipe(map(x => x)),
// )).subscribe(console.log);

source$.pipe(connect(haha$ => merge(
    haha$.pipe(map(x => x)),
    haha$.pipe(map(x => x*2)),
))).subscribe(console.log);

//source$.connect();