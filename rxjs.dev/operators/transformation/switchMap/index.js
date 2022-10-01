const { of, switchMap } = rxjs;


// ex 1
const switched = of(1, 2, 3).pipe(switchMap(x => of(x, x ** 2, x ** 3)));
switched.subscribe(x => console.log(x));
// outputs
// 1
// 1
// 1
// 2
// 4
// 8
// 3
// 9
// 27

// ex 2
//reference more from maximilian


// conclusion
/*
- map current observable(1) to new observable(2) and return new observable
- whenever current observable(1) emit new value -> the new observable(2) will unsubscribe and subscribe new observable
- (create new observabe whenever first observable have new element)


*/