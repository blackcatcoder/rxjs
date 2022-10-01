const { Observable, create, fromEvent, of, range, filter, map } = rxjs;

console.log("----")
const observeble = of(Math.random());
observeble.subscribe(console.log)
observeble.subscribe(console.log)

console.log("-----")
const cold = Observable.create(obs => obs.next(Math.random()));
cold.subscribe(console.log);
cold.subscribe(console.log);

console.log("------")
const cold2 = new Observable((subscriber) => {
  subscriber.next(Math.random())
});
cold2.subscribe(console.log); // value different
cold2.subscribe(console.log); // value different