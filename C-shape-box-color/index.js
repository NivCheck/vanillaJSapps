const boxContainer = document.getElementById('box-container');
const boxEl = document.querySelectorAll('.box');
let queue = [];  // mistake instead global scope here declared inside eventlistner

boxContainer.addEventListener('click', function(e) {
    let index = e.target.dataset.index;
    if(index != undefined) {
        boxEl[index].classList.add('green');
        queue.push(index);
    }
    if(queue.length == 7) {
        let counter = 0;
        while (queue.length > 0) { //mistake symbol greter or less than
            let ind = queue.shift();
            counter++
            setTimeout(function() {
                boxEl[ind].classList.remove('green');
            }, counter*1000)
        }
    }

})