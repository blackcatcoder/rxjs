

const { Subject, isEmpty } = rxjs;

const source = new Subject();
const result = source.pipe(isEmpty());

source.subscribe(x => console.log(x));
result.subscribe(x => console.log(x));

source.next('a');
source.next('b');
source.next('c');
source.complete();

// Outputs
// 'a'
// false
// 'b'
// 'c'

/*
conclusion

Emits false if the input Observable emits any values, or emits true if the input Observable completes without emitting any values.

*/