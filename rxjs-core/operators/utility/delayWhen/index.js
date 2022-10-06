
const { fromEvent, delayWhen, interval } = rxjs;

const clicks = fromEvent(document, 'click');
const delayedClicks = clicks.pipe(
  delayWhen(() => interval(5000))
);
delayedClicks.subscribe(x => console.log(x));

/*
conclusion

- Delays the emission of items from the source Observable by a given time span determined by the emissions of another Observable.

- It's like delay, but the time span of the delay duration is determined by a second Observable.

*/