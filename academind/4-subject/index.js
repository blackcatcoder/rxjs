const { Observable, Subject, BehaviorSubject } = rxjs;


// create subject like create observable
// const observable
const subject = new Subject();

const observer1 = {
    next: data => console.log("next 1: ",data),
    error: (error) => console.log("error message 1: ", error),
    complete: () => console.log('complete')
}
const subscription1 = subject.subscribe(observer1);


const observer2 = {
    next: data => console.log("next 2: ",data),
    error: (error) => console.log("error message 2: ", error),
    complete: () => console.log('complete')
}
const subscription2 = subject.subscribe(observer2);

// active to put item to observable
subject.next(1);
subject.next(2);
subject.next(Math.random())
//subject.error('kaka');
subject.complete();

setTimeout(() => {
    subscription1.unsubscribe();
    subscription2.unsubscribe();
}, 5000);


//--------------------------------------------
console.log('---------------------------------')
// behavior subject
//const clickSubject = new Subject(); // tuong duong voi 1 observable
const clickSubject = new BehaviorSubject('default value'); // offer a default value

const button1 = document.getElementById('buttonId1');
const span = document.getElementById('spanId');

button1.addEventListener('click', () => {
    clickSubject.next(Math.random())
});

clickSubject.subscribe((value) => {
    console.log('behavior 1: ', value);
    span.textContent = value
});
clickSubject.subscribe((value) => {
    console.log('behavior 2: ', value);
    span.textContent = value
});

setTimeout(() => {
    clickSubject.subscribe((value) => {
        console.log('behavior 3: ', value);
      //  span.textContent = value
    });
}, 3000);


//--------------------------------------------
console.log('---------------------------------')
const source$ = new Observable((subscriber) => {
    subscriber.next(Math.random())
});
source$.subscribe((data) => console.log('observable 1: ', data));
source$.subscribe((data) => console.log('observable 2: ', data));
// conclusion: value of each time subscribe will be change