const { of, map, catchError } = rxjs;

of(1, 2, 3, 4, 5)
  .pipe(
    map(n => {
      if (n === 4) {
        throw 'four!';
      }
      return n;
    }),
    catchError(err => of(err, 'I', 'II', 'III', 'IV', 'V'))
  )
  .subscribe(x => console.log(x));
  // 1, 2, 3, I, II, III, IV, V


// conclusion