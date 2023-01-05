const { of, timer, concatMap, map, interval, takeUntil } = rxjs;

// case 1 - after timer and return new observable
// This could be any observable
const source = of(100, 200, 300);
timer(3000)
  .pipe(concatMap(() => source))
  .subscribe(console.log);

// timer => return an observable
// concatMap => return an observable
// => after 3s return another observable


// case 2 - only use observable inside timer
// Build a Date object that marks the
// next minute.
const currentDate = new Date();
const startOfNextMinute = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate(),
  currentDate.getHours(),
  currentDate.getMinutes(),
  currentDate.getSeconds() + 11
);
 
// This could be any observable stream
const source2 = interval(1000);
 
const result2 = source2.pipe(
  takeUntil(timer(startOfNextMinute))
);
 
result2.subscribe({
  next: console.log,
  complete: () => console.log("complete")
});

// when timer end the observable will complete
// observable source2 working only inside timer


// conclusion
// 