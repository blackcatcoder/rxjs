const { Observable, fromEvent, throttleTime, map } = rxjs;


// original way
const button = document.querySelector('button');
button.addEventListener('click', (event) => {
    console.log('normal: ',event);
})

// rxjs way
fromEvent(button, 'click').subscribe((event) => {
    console.log('rxjs: ',event);
})

// rxjs throttleTime
// only allow 1 click per 1 second
fromEvent(button, 'click').pipe(throttleTime(1000)).subscribe((event) => {
    console.log('rxjs throttleTime: ',event);
    console.log(event.clientX);
    console.log(event.clientY);
})

// rxjs throttleTime -> map
// transform data before return to subscriber
fromEvent(button, 'click')
    .pipe(
        throttleTime(1000),
        map(data => data.clientX))
    .subscribe((data) => {
        console.log('rxjs throttleTime map: ');
        console.log(data);
})

// this is in use case we apply
// 1: will call js normal function
// 2: will run observable function
const button2 = document.getElementById('button2');
button2.addEventListener('click', (event) => {
    console.log('normal 2: ',event);

    const observable = new Observable((subscriber) => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
    });

    const observer = {
        next: data => console.log(data),
        error: (error) => console.log(error),
        complete: () => console.log('complete')
    }

    const subscription = observable.subscribe(observer);

    //subscription.unsubscribe();
    setTimeout(() => {
        subscription.unsubscribe();
    }, 3000);

})

// this demo is
// from a button after click will run an observable and then ...
const button3 = document.getElementById('button3');
button3.addEventListener('click', (event) => {
    console.log('button clicked: ',event);

    const button4 = document.getElementById('button4');

    const subscription4 = fromEvent(button4, 'click').subscribe((event) => {
        console.log('rxjs 4: ',event);
    })

    setTimeout(() => {
        subscription4.unsubscribe();
    }, 3000);

});