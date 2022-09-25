const { Observable, Subject, fromEvent, throttleTime, map, interval } = rxjs;


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
//subject.error('kaka');
subject.complete();


setTimeout(() => {
    subscription1.unsubscribe();
    subscription2.unsubscribe();
}, 5000);
