const { ReplaySubject, map, AsyncSubject, expand, of, delay, take } = rxjs;


// ex 1
const sub = new ReplaySubject(3);

sub.next(1);
sub.next(2);
sub.subscribe((data) => console.log('subscription 1: ', data)); // OUTPUT => 1,2

sub.next(3); // OUTPUT => 3
sub.next(4); // OUTPUT => 4
sub.next(5);
sub.next(6);
sub.subscribe((data) => console.log('subscription 2: ', data)); // OUTPUT => 2,3,4 (log of last 3 values from new subscriber)

sub.next(7); // OUTPUT => 5,5 (log from both subscribers)


setTimeout(() => {
    sub.subscribe((data) => console.log('subscription 3: ', data)); 
}, 3000);
setTimeout(() => {
    sub.subscribe((data) => console.log('subscription 4: ', data)); 
}, 5000);

// ex 2

// conclusion
/*

- subject second will log the last 3 values from original subject
    + this value is set in the constructor

*/