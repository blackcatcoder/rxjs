
const { of, tap, map } = rxjs;

of(Math.random()).pipe(
  tap(console.log),
  map(n => n > 0.5 ? 'big' : 'small')
).subscribe(console.log);

/*
conclusion

- Used to perform side-effects for notifications from the source observable
- nothing too fancy

*/