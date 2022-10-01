const { fromEvent, of, map, tap, interval, mergeAll, first, take } = rxjs;

// example 1
const button = document.getElementById("buttonId");
const click = fromEvent(button, 'click');

const result = click.pipe(first());
const subscription = result.subscribe(console.log);

// example 2
const observable = of(1, 2, 3, 4);

console.log("without first");
observable.subscribe(console.log);
// result: 1, 2, 3, 4

console.log("with first");
observable.pipe(first()).subscribe(console.log);
// result: 1