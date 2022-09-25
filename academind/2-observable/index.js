const { Observable, fromEvent, throttleTime, map } = rxjs;

// create and observable and put some data
const observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
   
    setTimeout(() => {
        subscriber.next(4);
       // subscriber.error("error message");
        subscriber.complete();
    }, 2000);

    subscriber.next(3);
   // subscriber.error();
   //subscriber.complete();
});

const observer = {
    next: data => console.log(data),
    error: (error) => console.log(error),
    complete: () => console.log('complete')
}

const subscription = observable.subscribe(observer);

subscription.unsubscribe();


// create an observable and attach event click to it
const button = document.getElementById('buttonId');
const observable2 = new Observable((subscriber) => {
    button.onclick = (event) => {
        subscriber.next(event);
    }
});
const subscription2 = observable2.subscribe(observer);

setTimeout(() => {
    subscription2.unsubscribe();
}, 5000);


// each click will create and observable and then log data and then unsubscribe after timeout
const subscription3 = fromEvent(button, 'click').subscribe((event) => {
    console.log('rxjs: ',event);
})
setTimeout(() => {
    subscription3.unsubscribe();
}, 10000);


// create an observable and we will have 3 subscription to it
// we can have how many subscriber as we can
const observable4 = new Observable((subscriber) => {
    subscriber.next("hello");
    subscriber.next("world");
});

const observer4_1 = {
    next: (data) => console.log("4.1: ", data)
}
const subscription4_1 = observable4.subscribe(observer4_1);

const observer4_2 = {
    next: (data) => console.log("4.2: ", data)
}
const subscription4_2 = observable4.subscribe(observer4_2);

const observer4_3 = {
    next: (data) => console.log("4.3: ", data)
}
const subscription4_3 = observable4.subscribe(observer4_3);

setTimeout(() => {
    subscription4_1.unsubscribe();
    subscription4_2.unsubscribe();
    subscription4_3.unsubscribe();
}, 5000);