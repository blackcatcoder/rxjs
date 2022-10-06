const { fromEvent, find } = rxjs;


// example 1
const div = document.createElement('div');
div.style.cssText = 'width: 200px; height: 200px; background: #09c;';
document.body.appendChild(div);

const observer = {
    next: data => console.log(data),
    complete: () => console.log("complete"),
    error: () => console.log("error")
}

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(find(ev => ev.target.tagName === 'DIV'));
result.subscribe(observer);


// example 2

/*
conclusion

- only get first value of source observable to meet some condition and then complete it

*/