
console.log("olala")

const { Observable, fromEvent, range, filter, map } = rxjs;

//1 ----------------------------------------------------------
var button = document.getElementById('buttonId');
function greeding(){
    console.log("hello world");
}
button.addEventListener('click', greeding);

//2 ----------------------------------------------------------
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

  //3 ----------------------------------------------------------
  function subscribe(subscriber) {
    const intervalId = setInterval(() => {
      subscriber.next('hi');
    }, 1000);
  
    return function unsubscribe() {
      clearInterval(intervalId);
    };
  }
  
  const unsubscribe = subscribe({ next: (x) => console.log(x) });
  
  // Later:
  unsubscribe(); // dispose the resources

//4 ----------------------------------------------------------
var button_4 = document.getElementById('buttonId4');
const observable4 = fromEvent(button_4, 'click'); // this is an observable
observable4.subscribe(value => console.log(value.clientX))
observable4.subscribe(value => console.log(value.clientY))

//5 ----------------------------------------------------------