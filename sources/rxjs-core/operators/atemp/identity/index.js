
const { interval, take, map, range, mergeMap, identity  } = rxjs;

const source$ = interval(1000).pipe(take(5));

const result$ = source$.pipe(
  map(i => range(i)),
  //mergeMap(identity) // same as mergeMap(x => x)
  mergeMap(x => x)
);

result$.subscribe({
  next: console.log
});