const { fromEvent, of, map, interval, mergeMap, switchMap, catchError, take, combineLatestAll, concatWith, concatAll, concatMap } = rxjs;

// map
const buttonMap = document.getElementById("buttonId1");
const observable = fromEvent(buttonMap, 'click');
const secondObs = observable.pipe(map(event => 'second'))
const subscription = secondObs.subscribe(data => console.log(data));


// concat map
const buttonConcatMap = document.getElementById("buttonId2");
const observable2 = fromEvent(buttonConcatMap, 'click');
const secondObs2 = observable2.pipe(concatMap(event => 'second'))
const subscription2 = secondObs2.subscribe(data => console.log(data));


// concat map
const buttonConcatMap3 = document.getElementById("buttonId3");
const observable3 = fromEvent(buttonConcatMap3, 'click');
const secondObs3 = observable3.pipe(concatMap(event => interval(1000).pipe(take(4))));
const subscription3 = secondObs3.subscribe(data => console.log(data));


// respect order
// need more research

// map just transform item to new item
// concatMap concat 2 observable to 1 and respect the order
// waits for each inner observable to complete