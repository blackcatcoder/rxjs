const {  Subject, of, tap, connect, take, mergeWith, map, filter, interval, connectable, timer  } = rxjs;



// cold observable
const interval$ = interval(1000).pipe(take(5));
const subject = new Subject();

interval$.subscribe(subject);
subject.subscribe(console.log);




// suggested refactor
const tick$ = connectable(timer(1000), {
  connector: () => new Subject()
});
tick$.connect();

tick$.subscribe(console.log);


/*
conclusion

- for convert cold to hot observable 

*/