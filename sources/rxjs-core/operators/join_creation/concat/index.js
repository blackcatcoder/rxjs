const { fromEvent, of, map, interval, mergeMap, switchMap, catchError, take, combineLatestAll, concatWith } = rxjs;

const button = document.getElementById('buttonId');

const clicks$ = fromEvent(button, 'click');
const move$ = of(1,2, 3, 4);

clicks$.pipe(
    map(() => 'click'),
    take(1),
    concatWith(
        move$.pipe(
            map(() => 'move')
        )
    )
).subscribe(x => console.log(x));

// 'click'
// 'move'
// 'move'  x                                             
// 'move'
// ... 

// apply concat 2 observables to 1 observable 
// understood