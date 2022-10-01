const { Observable, map, interval, raceWith, take, toArray } = rxjs;

const source$ = interval(1000);

const observer = {
    next: console.log,
    complete: () => console.log('complete'),
    error: () => console.log("error")
}

const subscription1 = source$.pipe(take(10)).subscribe(observer);
const subscription2 = source$.pipe(take(10), toArray()).subscribe(observer);

// conclusion
// map all element in observable to an array and then subscribe it