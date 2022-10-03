const { of,  distinct } = rxjs;

const observable = of(1, 2, 3, 3, 3, 4, 4, 5);

const subscription = observable
    .pipe(distinct())
    .subscribe(data => console.log(data));



// conclusion
// get the unique value from observable