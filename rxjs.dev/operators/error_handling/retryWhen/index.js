
const { interval, map, retryWhen, tap, delayWhen, timer } = rxjs;

const source = interval(1000);
const result = source.pipe(
  map(value => {
    if (value > 5) {
      // error will be picked up by retryWhen
      throw value;
    }
    return value;
  }),
  retryWhen(errors =>
    errors.pipe(
      // log error message
      tap(value => console.log(`Value ${ value } was too high!`)),
      // restart in 5 seconds
      delayWhen(value => timer(value * 1000))
    )
  )
);

result.subscribe(value => console.log(value));

// results:
// 0
// 1
// 2
// 3
// 4
// 5
// 'Value 6 was too high!'
// - Wait 5 seconds then repeat

/*
conclusion


*/