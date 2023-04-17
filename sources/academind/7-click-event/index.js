const { Observable, Subject, fromEvent, of, throttleTime, map, interval, debounceTime, distinctUntilChanged, reduce, scan, pluck } = rxjs;

const button = document.getElementById('buttonId');

// Create an observable that emits click events on the button
const click$ = fromEvent(button, 'click');

// Subscribe to the observable and log the click event
const subscription = click$.subscribe((event) => {
  console.log('Button clicked!', event);
});



// Unsubscribe from the observable when you are done with it
window.addEventListener('unload', () => {
    alert("bye bye");
    console.log('unsubscribe');
    subscription.unsubscribe();
  });