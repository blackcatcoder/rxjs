
const { interval, map, fromEvent, startWith, takeUntil, endWith } = rxjs;
 
// obs 1
const ticker$ = interval(5000).pipe(
  map(() => 'tick')
);

// obs 2
const documentClicks$ = fromEvent(document, 'click');
 
ticker$.pipe(
  startWith('interval started'),
  takeUntil(documentClicks$),
  endWith('interval ended by click')
)
.subscribe(x => console.log(x));
 
// Result (assuming a user clicks after 15 seconds)
// 'interval started'
// 'tick'
// 'tick'
// ...
// 'tick'
// 'interval ended by click'

// ok understood