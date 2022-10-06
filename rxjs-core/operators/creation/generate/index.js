const { of, timer, concatMap, map, generate } = rxjs;

console.log("case 1")
const sub1 = generate(
    2,
    x => x <= 8,
    x => x + 3
  ).subscribe(console.log);


console.log("case 2")
const result2 = generate(0, x => x < 3, x => x + 1);
const sub2 = result2.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Complete!')
});


console.log("case 3")
const result3 = generate(0, x => x < 3, x=> x + 1, x => x * 1000);
const sub3 = result3.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Complete!')
});


setTimeout(() => {
    sub1.unsubscribe();
    sub2.unsubscribe();
    sub3.unsubscribe();
}, 5000);


// conclusion
// working like for loop
// (int i = 0; i < 10; i++){}