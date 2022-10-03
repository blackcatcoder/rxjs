
const { map, tap, catchError, of, fromEvent } = rxjs;
const { ajax } = rxjs.ajax;

const obs$ = ajax('https://api.github.com/users?per_page=5').pipe(
  tap(userResponse => console.log('users: ', userResponse)),
  map(userResponse => userResponse.response),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
);

obs$.subscribe({
  next: value => console.log('rs success: ', value),
  error: err => console.log('rs err: ', err)
});



