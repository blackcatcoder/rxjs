
const { interval, timeout, tap } = rxjs;

const slow$ = interval(10000).pipe(tap(() => console.log("slow: ")));
const fast$ = interval(5000).pipe(tap(() => console.log("fast: ")));

slow$.pipe(
  timeout({
    each: 1000,
    with: () => fast$,
  })
)
.subscribe(console.log);

/*
conclusion
- Errors if Observable does not emit a value in given time span.

- Timeouts on Observable that doesn't emit values fast enough.
*/