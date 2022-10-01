const { fromEvent, map, expand, of, delay, take } = rxjs;


const clicks = fromEvent(document, 'click');
const powersOfTwo = clicks.pipe(
  map(() => 1),
  expand(x => of(2 * x)),
  take(10)
);

powersOfTwo.subscribe(x => console.log(x));





// conclusion
/*

- from a value inside observable -> expand to many value, limit by take(number of element inside observable)
- ok nothing too fancy

*/

