const { fromEvent, exhaustMap, interval, take } = rxjs;

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  exhaustMap(() => interval(1000).pipe(take(5)))
);
result.subscribe(x => console.log(x));


// conclusion
// map current observable(1) to  new observable(2)
// during time new observable(2) alive and emit value, even current observable(1) emit new value there is nothing happen
// we need to wailt until new observable(2) end. after that we can trigger normal from observable 1 