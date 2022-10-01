const { of,  filter } = rxjs;

const observable = of(1, 2, 3, 3, 3, 4, 4, 5);

const subscription = observable
    .pipe(filter(data => data > 2 && data < 5))
    .subscribe(data => console.log(data));


// conclusion
// get the unique value from observable