
const { interval, map, fromEvent, startWith, takeUntil, endWith, from, of, Subject } = rxjs;

const subject = new Subject();
subject.subscribe({
    next: data => console.log('a: ', data)
})
subject.subscribe({
    next: data => console.log('b: ', data)
})

const source$ = of(1, 2, 3);

source$.subscribe(subject)
source$.subscribe(subject)