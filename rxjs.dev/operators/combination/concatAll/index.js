const { fromEvent, of, map, interval, mergeMap, switchMap, catchError, take, combineLatestAll, concatWith, concatAll } = rxjs;

const clicks$ = of(1,2);//fromEvent(document, 'click');
const higherOrder = clicks$.pipe(
    map(() => interval(1000).pipe(take(4)))
  );

const firstOrder = higherOrder.pipe(concatAll());

firstOrder.subscribe(x => console.log(x));

//clicks$.subscribe(x => console.log(x));

// after run -> understood