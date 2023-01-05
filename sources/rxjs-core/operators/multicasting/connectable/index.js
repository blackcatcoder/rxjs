const {  Subject, of, tap, connect, take, mergeWith, map, filter, interval, connectable, timer  } = rxjs;



// ex 2 - without connectable
const source0$ = of(1, 2, 3).pipe(tap((data) => console.log("processing: ", data)), map(() => Math.random()));
const subscription01 = source0$.subscribe((data) => console.log('data 1: ', data))
const subscription02 = source0$.subscribe((data) => console.log('data 2: ', data))
/*
without connectable it will
- observable cold
- observable unicast
*/


// ex 2 - with connectable
const source$ = interval(1000).pipe(tap((data) => console.log("processing: ", data)), take(3), map(x => Math.random()))
const tick$ = connectable(source$, {
  connector: () => new Subject()
});
tick$.connect();

const subscription1 = tick$.subscribe({next: (data) => console.log('result 1: ', data), complete: () => console.log("complete 1")});
const subscription2 = tick$.subscribe({next: (data) => console.log('result 2: ', data), complete: () => console.log("complete 2")});


setTimeout(() => {
  subscription1.unsubscribe();
  subscription2.unsubscribe();
}, 10000);

/*
conclusion

- convert cold to hot observable 
- convert observable from unicast to multicast
(can share state to multiple subscriber)

*/