const { fromEvent, exhaustMap, interval, take, map, of, from } = rxjs;

const students = [
    {id: 1, name: 'anhvi 1'},
    {id: 2, name: 'anhvi 2'},
    {id: 3, name: 'anhvi 3'},
    {id: 4, name: 'anhvi 4'},
    {id: 5, name: 'anhvi 5'},
];

const observer = {
    next: (data) => console.log(data)
}

// rxjs from
const studentsFrom$ = from(students);
const subscriptionFrom = studentsFrom$.pipe(map(student => student.name)).subscribe(observer);

// rxjs of
const studentsOf$ = of(students);
const subscriptionOf = studentsOf$.pipe(map(students => students // this map belong rxjs
    .map(student => student.name) // this map belong javascript
    .filter(name => name === 'anhvi 2' || name === 'anhvi 3'))) // this filter belong javascript
.subscribe(observer);


setTimeout(() => {
    subscriptionFrom.unsubscribe();
    subscriptionOf.unsubscribe();
}, 5000);