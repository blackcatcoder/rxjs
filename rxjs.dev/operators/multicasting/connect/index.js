const {  of, tap, connect, merge, map, filter  } = rxjs;

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

/*


*/