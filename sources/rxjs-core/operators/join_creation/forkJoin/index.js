const { forkJoin, of, timer } = rxjs;

// Use forkJoin with a dictionary of observable inputs
const observable = forkJoin({
  foo: of(1, 2, 3, 4),
  bar: Promise.resolve(8),
  baz: timer(4000)
});

observable.subscribe({
 next: value => console.log(value),
 complete: () => console.log('This is how it ends!'),
});

// Logs:
// { foo: 4, bar: 8, baz: 0 } after 4 seconds
// 'This is how it ends!' immediately after


// Use forkJoin with an array of observable inputs
