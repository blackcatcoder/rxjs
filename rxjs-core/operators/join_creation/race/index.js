const { Observable, map, interval, raceWith, tap } = rxjs;

const obs1 = interval(2000).pipe(tap(() => console.log('1')), map(() => 'slow one'));
const obs2 = interval(3000).pipe(tap(() => console.log('2')), map(() => 'fast one'));
const obs3 = interval(5000).pipe(tap(() => console.log('3')), map(() => 'medium one'));

const subscription = obs1
  .pipe(raceWith(obs2, obs3))
  .subscribe(winner => console.log(winner));

setTimeout(() => {
    subscription.unsubscribe();
}, 11000);

// conclusion
// only get the fastest data inside observable