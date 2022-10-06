const { Observable, interval, of, tap, map, take, share } = rxjs;


// example 1 without share
console.log("example 1 without share")
const source = interval(1000).pipe(
  tap(x => console.log('Processing: ', x)),
  map(x => x * x),
  take(3)
);
source.subscribe(x => console.log('subscription 1: ', x));
source.subscribe(x => console.log('subscription 2: ', x));
// Processing:  0
// subscription 1:  0 
// Processing:  0 
// subscription 2:  0 

// Processing:  1 
// subscription 1:  1 
// Processing:  1 
// subscription 2:  1
// ...


// example 2 where share
setTimeout(() => {
    console.log("----------------------------------------")
    console.log('example 2 withshare')
    const source2 = interval(1000).pipe(
        tap(x => console.log('Processing: ', x)),
        map(x => x * x),
        take(3),
        share()
    );
  
    source2.subscribe(x => console.log('subscription 1: ', x));
    source2.subscribe(x => console.log('subscription 2: ', x));
}, 5000);
// Logs:
// Processing: 0
// subscription 1: 0
// subscription 2: 0

// Processing: 1
// subscription 1: 1
// subscription 2: 1
//...


// conclusion
/*

- generate new multicast observable(subject) from source observable to multiple subscriber is subscribing to it
- make observable from unicast to multicast

*/