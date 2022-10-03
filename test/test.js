const { Observable, create, interval, fromEvent, of, range, filter, map, tap } = rxjs;

const source$ = of([1, 2, 3, 4, 5])
//const source$ = interval(1000);
// .pipe(
//   tap({
//     subscribe: () => console.log('subscription started'),
//     next: n => console.log(`source emitted ${ n }`)
//   })
// );


source$.subscribe((x) => console.log('x: ', x));
source$.subscribe((x) => console.log('y: ', x));