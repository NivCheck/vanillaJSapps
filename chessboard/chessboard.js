let table = document.getElementById('table');

for(let i=0;i<8; i++) {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    let white = i%2==0 ? true : false;
    for (let j=0; j<8; j++) {
        let td = document.createElement('td');
        if(white) {
            td.setAttribute('class', 'box white');
        } else {
            td.setAttribute('class', 'box black');
        }
        white = !white;
        td.setAttribute('data-index', `${i}-${j}`);
        tr.appendChild(td);
    }
}

table.addEventListener('mouseover', function(e) {
    let temp = e.target.dataset.index.split('-').map((item)=> parseInt(item));
    let row = temp[0];
    let col = temp[1];
    let hash = {};
    let str = `${row}-${col}`;
    hash[str] = true;
    hash = getTopLeft(row, col, hash);
    hash = getTopRight(row, col, hash);
    hash = getBottomleft(row, col, hash);
    hash = getBottomRight(row, col, hash);
    
    let cells = document.querySelectorAll('td');

    for(let i=0; i<cells.length; i++) {
        cells[i].classList.remove('blue');
    }

    for(let j=0; j<cells.length; j++) {
        let str = `${cells[j].closest('tr').rowIndex}-${cells[j].cellIndex}`;
        if(hash[str]) {
            cells[j].classList.add('blue');
        }
    }
});

function getTopLeft(row, col, hash) {
    row--;
    col--;
    while(row>=0&& col>=0) {
        let str = `${row}-${col}`;
        hash[str] = true;
        row--;
        col--;
    }
    return hash;
}

function getTopRight(row, col, hash) {
    row--;
    col++;
    while(row>=0&& col<8) {
        let str = `${row}-${col}`;
        hash[str] = true;
        row--;
        col++;
    }
    return hash;
}

function getBottomleft(row, col, hash) {
    row++;
    col--;
    while(row<8 && col>=0) {
        let str = `${row}-${col}`;
        hash[str] = true;
        row++;
        col--;
    }
    return hash;
}

function getBottomRight(row, col, hash) {
    row++;
    col++;
    while(row<8 && col<8) {
        let str = `${row}-${col}`;
        hash[str] = true;
        row++;
        col++;
    }
    return hash;
}

