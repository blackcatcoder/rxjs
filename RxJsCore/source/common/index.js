import { Observable, from } from 'rxjs';


// Observable
//---------------------------------------------------------------------------
const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log('just before subscribe');
observable.subscribe({
  next(x) {
    console.log('got value ' + x);
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
    console.log('done');
  },
});
console.log('just after subscribe');


//--------
const observable_1 = new Observable(function subscribe(subscriber) {
    //const id = setInterval(() => {
      subscriber.next('hi');
    // }, 1000);
  });

observable_1.subscribe((value) => {
    console.log("value: ",value);
}
);

//-------

const observable_2 = from([10, 20, 30]);
const subscription = observable_2.subscribe((x) => console.log(x));
// Later:
subscription.unsubscribe();

//--------
const observable_3 = new Observable(function subscribe(subscriber) {
    // Keep track of the interval resource
    const intervalId = setInterval(() => {
      subscriber.next('hi');
    }, 1000);
   
    // Provide a way of canceling and disposing the interval resource
    return function unsubscribe() {
      clearInterval(intervalId);
    };
  });

  const subscription_3 = observable_3.subscribe((x) => {
    console.log(x);
  })

  //subscription_3.unsubscribe();
setTimeout(() => {
    subscription_3.unsubscribe();
}, 5000);


// Observer
//---------------------------------------------------------------------------
const observer = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
};
const observable_4 = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.complete();
});
observable_4.subscribe(observer);


// Operators
//---------------------------------------------------------------------------

// Creation Operators

// Join Creation Operators

// Transformation Operators

// Filtering Operators

// Join Operators

// Multicasting Operators


// Error Handling Operators


// Utility Operators

// Conditional and Boolean Operators


// Mathematical and Aggregate Operators