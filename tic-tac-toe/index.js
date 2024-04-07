const gameEl = document.getElementById('game');
const resetbtn = document.getElementById('reset');
const winEl = document.getElementById('winEl');
let hash = {};
let chance = true;
let allFilled = 0;

gameEl.addEventListener('click', function(e) {
    const index = e.target.dataset.index;
    if(index) {
        const[row, col] = index.split('-').map(item=> parseInt(item));
        console.log(row, col);
        if(chance) {
            hash[index] = 'X';
            e.target.classList.add('with-X')
        } else {
            hash[index] = 'O';
            e.target.classList.add('with-O')
        }
        chance = !chance;
        allFilled++;
        let winText = checkWin();
        document.getElementById('win').textContent = winText;
        if(allFilled == 9) {
            gameEl.style.pointerEvents = 'none';
        }
    }
})

function checkWin() {
    let player = '';
    //row 
    for(let i=0; i<3; i++) {
        let set = new Set();
        for(let j=0; j<3;j++) {
            let index = `${i}-${j}`;
            player = hash[index];
            set.add(hash[index]);
        }
        if(set.size == 1 && player) {
            return `Player ${player} win`
        }
    }

    //col 
    for(let j=0; j<3; j++) {
        let set = new Set();
        for(let i=0; i<3;i++) {
            let index = `${i}-${j}`;
            player = hash[index];
            set.add(hash[index]);
        }
        if(set.size == 1 && player) {
            return `Player ${player} win`
        }
    }

    // diagnol
    let i =0, j=0;
    let set = new Set();
    while(i<3 && j<3) {
        let index = `${i}-${j}`;
        set.add(hash[index]);
        player = hash[index];
        i++;
        j++;
    }
    if(set.size == 1 && player) {
        return `Player ${player} win`
    }

    //anti-diagnol
    i=0, j=2;
    set.clear();
    while(i<3 && j>=0) {
        let index = `${i}-${j}`;
        set.add(hash[index]);
        player = hash[index];
        i++;
        j--;
    }
    if(set.size==1 && player) {
        return `Player ${player} win`;
    }

    if(allFilled == 9) {
        return 'Match draw';
    }
    
        
        
}

resetbtn.addEventListener('click', function(){
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell)=> {
        if(cell.classList.contains('with-X')) {
            cell.classList.remove('with-X');
        } else {
            cell.classList.remove('with-O');
        }
    })
    gameEl.style.pointerEvents = 'auto';
    allFilled = 0;
    chance = true;
    hash = {};
    document.getElementById('win').textContent = '';
})
