const { fromEvent, map, mergeWith } = rxjs;

const clicks$ = fromEvent(document, 'click').pipe(map(() => 'click'));
const mousemoves$ = fromEvent(document, 'mousemove').pipe(map(() => 'mousemove'));
const dblclicks$ = fromEvent(document, 'dblclick').pipe(map(() => 'dblclick'));

mousemoves$
  .pipe(mergeWith(clicks$, dblclicks$))
  .subscribe(x => console.log(x));

// result (assuming user interactions)
// 'mousemove'
// 'mousemove'
// 'mousemove'
// 'click'
// 'click'
// 'dblclick'