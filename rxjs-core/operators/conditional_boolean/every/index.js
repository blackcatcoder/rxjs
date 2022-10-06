const { of, every } = rxjs;


of(1, 2, 3, 4, 5, 6)
  .pipe(every(x => x < 5))
  .subscribe(x => console.log(x)); // -> false

/*
conclusion

- return an observable
- all items inside observable satisfies the condition specified or not


*/