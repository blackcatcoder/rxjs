const { Observable, Subject, fromEvent, of, throttleTime, map, interval, debounceTime, distinctUntilChanged, reduce, scan, pluck, mergeMap, switchMap } = rxjs;

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

const showFirstName = document.getElementById("showFirstName");
const showLastName = document.getElementById("showLastName");
const showFullName = document.getElementById("showFullName");


// mergeMap
const observableFirstName = fromEvent(firstName, 'input');
const observableLastName = fromEvent(lastName, 'input');

// const observer = {
//     next: (event) => fullName.textContent = event.target.value
// }
const subscriptionFirstName = observableFirstName
    .pipe(map(event => event.target.value))
    .subscribe(data => showFirstName.textContent = data);

const subscriptionLastName = observableLastName
    .pipe(map(event => event.target.value))
    .subscribe(data => showLastName.textContent = data);

const subscription = observableFirstName
    .pipe(mergeMap(event1 => {
        return observableLastName.pipe(map(event2 => event1.target.value +' ' +event2.target.value))
    }))
    .subscribe(combineValue => showFullName.textContent = combineValue);


// switchMap
const observable2 = interval(1000);// after 1s it will auto put a value and increase that value to observable
//const observer2 = (data) => console.log(data);
//const subscription2 = observable2.subscribe(observer2);

const button = document.getElementById("buttonId");
const observableButton = fromEvent(button, 'click');

const subscriptionButton = observableButton
    .pipe(switchMap(() => {
        return observable2
    }))
    .subscribe(data => console.log(data));

setTimeout(() => {
    subscriptionButton.unsubscribe();
}, 50000);
