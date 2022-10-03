const {  of, tap, connect, merge, mergeWith, map, filter, interval, take  } = rxjs;


// cold observable
const source$ = of(1, 2, 3);


source$.subscribe((data) => console.log("from 1: "+data))
source$.subscribe((data) => console.log("from 2: "+data))


// hot observable
const sourceHot$ = interval(1000).pipe(take(5));

sourceHot$.subscribe((data) => console.log("from hot 1: ", data))

setTimeout(() => {
    sourceHot$.subscribe(data => console.log("from hot 2: ", data))
}, 2000);

// convert from cold to hot observable
// tobe continue


/*
conclusion

- cold observable: data is ready in stream it will flush to which subscriber subscribe to it first
- hot observable a subscriber receives values when it starts to subscribe

*/