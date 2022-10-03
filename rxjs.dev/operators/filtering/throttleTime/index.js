const { fromEvent, throttleTime } = rxjs;

// const observable 
// const observer
// const subscription


const clicks = fromEvent(document, 'click');
const result = clicks.pipe(throttleTime(1000));

result.subscribe(x => console.log(x));

// conclusion
// inside throtle time the elements will be remove, untill throttle time end.