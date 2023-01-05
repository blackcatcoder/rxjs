const { fromEvent, map, AsyncSubject, expand, of, delay, take } = rxjs;


const sub = new AsyncSubject();

sub.subscribe({next: (data) => console.log('sub 1', data), complete: () => console.log("complete")});

sub.next(123); //nothing logged

sub.subscribe({next: data => console.log('sub 2: ', data), complete: () => console.log("complete")});

sub.next(10);
sub.next(456); //nothing logged

setTimeout(() => {
    sub.subscribe({next: data => console.log('sub 3: ', data), complete: () => console.log("complete")});
}, 2000);


sub.next(20);

sub.complete(); //456, 456 logged by both subscribers





// conclusion
/*

- can be 1 publiser and many subscriber
- only get value after function complete() called
- even have many value it only get the latest value

=> ok understood

*/