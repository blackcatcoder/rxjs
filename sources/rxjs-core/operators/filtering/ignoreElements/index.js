const { of, ignoreElements } = rxjs;


of('you', 'talking', 'to', 'me')
  .pipe(ignoreElements())
  .subscribe({
    next: word => console.log(word),
    error: err => console.log('error:', err),
    complete: () => console.log('the end'),
  });

// result:
// 'the end'