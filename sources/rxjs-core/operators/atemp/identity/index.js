
const { interval, take, map, range, mergeMap, identity, tap  } = rxjs;

const source$ = interval(1000).pipe(take(5));

const result$ = source$.pipe(
  tap(i => console.log("--"+i)),
  map(i => range(i)),
  //mergeMap(identity) // same as mergeMap(x => x)
  mergeMap(x => x)
);

result$.subscribe({
  next: console.log
});
// range(i): create new observable from parameter of input
// ex: range(2) -> observable[0, 1]
// mergeMap(x => x): merge each inner observable to each outner observable and flatten inner observable
// range(1): 
/*
--0
--1
0
--2
0
1
--3
0
1
2
--4
0
1
2
3
*/