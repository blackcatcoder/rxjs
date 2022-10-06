const { of, mergeMap, interval, map } = rxjs;


const letters = of('a', 'b', 'c');
const result = letters.pipe(
  mergeMap(x => interval(1000).pipe(map(i => x + i)))
);

const subscribtion = result.subscribe(x => console.log(x));

// Results in the following:
// a0
// b0
// c0
// a1
// b1
// c1
// continues to list a, b, c every second with respective ascending integers


setTimeout(() => {
    subscribtion.unsubscribe();
}, 10000);


// conclusion
// merge all element in observable(1) to each element of observable(2)