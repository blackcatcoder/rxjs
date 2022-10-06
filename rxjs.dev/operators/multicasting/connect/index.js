const {  of, tap, connect, merge, mergeWith, map, filter, timer  } = rxjs;

// example 1
const source$ = of(1, 2, 3, 4, 5).pipe(
  tap({
    subscribe: () => console.log('subscription started'),
    next: n => console.log(`source emitted ${ n }`)
  })
);

source$.pipe(
  // Notice in here we're merging 3 subscriptions to `shared$`.
  connect(shared$ => merge(
    shared$.pipe(map(n => `all ${ n }`)),
    shared$.pipe(filter(n => n % 2 === 0), map(n => `even ${ n }`)),
    shared$.pipe(filter(n => n % 2 === 1), map(n => `odd ${ n }`))
  ))
)
.subscribe(console.log);

// Expected output: (notice only one subscription)
'subscription started'
'source emitted 1'
'all 1'
'odd 1'
'source emitted 2'
'all 2'
'even 2'
'source emitted 3'
'all 3'
'odd 3'
'source emitted 4'
'all 4'
'even 4'
'source emitted 5'
'all 5'
'odd 5'

// example 2
// with connect
console.log("------------connect-----------")
const source2$ = of(1, 2, 3, 4, 5)
 
source2$.pipe(connect(share$ => merge(
    share$.pipe(tap(() => console.log("obs 1")), map(x => x)),
    share$.pipe(tap(() => console.log("obs 2")), map(x => x*2))
))).subscribe(console.log);


// example 3
// without connect
console.log("----------without connect-------------")
const source3$ = of(1, 2, 3, 4, 5)
 
merge(
  source3$.pipe(tap(() => console.log("obs 1")), map(x => x)),
  source3$.pipe(tap(() => console.log("obs 2")), map(x => x*2))
).subscribe(console.log);


/*
conclusion



if 1 observable after we transform to 2 observable.
we use connect() to make sure that 2 observable have output parallel.
- if we do not have connect observable 1 finish and then observable 2
- if we have connect observable 1 and observable 2 have print output parallel
(connect it means connect 2 observable to 1 but keep parrarel)

- connect will  make cold observable to hot observable


*/