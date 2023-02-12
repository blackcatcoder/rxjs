const { fromEvent, throttleTime, map } = rxjs;

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