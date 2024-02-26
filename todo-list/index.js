let inputEl = document.getElementById('input');
let itemsEl = document.getElementById('items');

function addItem() {
 let text = inputEl.value;
 console.log(text);
 addTodoItem(text);
}

function addTodoItem(text) {
    let item = document.createElement('div');
    item.classList.add('item');

    let textEL = document.createElement('span');
    textEL.classList.add('text');
    textEL.innerHTML = text;
    item.appendChild(textEL);
    
    //mark complete
    let tick = document.createElement('span');
    tick.classList.add('mark-btn');
    tick.innerHTML = '✔';
    item.appendChild(tick);

    //delete 
    let del = document.createElement('span');
    del.classList.add('del-btn');
    del.innerHTML = '✖';
    item.appendChild(del);

    itemsEl.appendChild(item);
    inputEl.value = '';
    inputEl.focus();
}

document.addEventListener('click', function(e) {
    let item = e.target;

    if(item.classList.contains('mark-btn')) {
        item.parentElement.firstChild.classList.toggle('complete');
    } else if (item.classList.contains('del-btn')) {
        item.parentElement.remove();
    }
})