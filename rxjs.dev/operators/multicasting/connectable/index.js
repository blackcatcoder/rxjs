const {  Subject, of, tap, connect, take, mergeWith, map, filter, timer, connectable, interval  } = rxjs;



// cold observable
const interval$ = interval(1000).pipe(take(5));

const subject = new Subject();

interval$.subscribe(subject);

subject.subscribe(console.log);


/*
conclusion

- for convert cold to hot observable 

*/