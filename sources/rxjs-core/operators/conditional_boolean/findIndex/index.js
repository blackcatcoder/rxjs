const { fromEvent, findIndex } = rxjs;

const div = document.createElement('div');
div.style.cssText = 'width: 200px; height: 200px; background: #09c;';
document.body.appendChild(div);

const observer = {
    next: data => console.log(data),
    complete: () => console.log("complete"),
    error: () => console.log("error")
}

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(findIndex(ev => ev.target.tagName === 'DIV'));
result.subscribe(observer);


/*
conclusion

- find index of item inside observable
- after found the index it will return new observable and complete that observable

*/