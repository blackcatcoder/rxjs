import { Observable, of, interval } from 'rxjs';  
import { map } from 'rxjs/operators';  

map(x => x * x)(of(1, 2, 3, 4, 5)).subscribe((v) => console.log(`Output is: ${v}`));   

console.log("1------------------------------------");
const observable = new Observable((subscribe) => {
    subscribe.next(2);
    subscribe.next(4);
}).pipe(map(x => x*x));

const subscription = observable.subscribe((x) => {
    console.log(x);
});

subscription.unsubscribe();

console.log("2------------------------------------");
const observable_2 = of(1,2);
const subscription_2 = observable_2.subscribe((x) => {
    console.log(x);
});
subscription_2.unsubscribe();