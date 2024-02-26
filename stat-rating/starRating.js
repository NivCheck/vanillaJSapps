let starContainer = document.getElementById('star-container');
let star = document.querySelectorAll('.star');
let countEl = document.getElementsByClassName('count')[0];
let filled = 0;
starContainer.addEventListener('mouseover', function(e){
    let starEl = e.target.dataset.star;
    for(let i=0; i< starEl; i++) {
        star[i].classList.add('star-filled');
    }
})

starContainer.addEventListener('mouseleave', function(e){
    let starEl = e.target.dataset.star;
    for(let i=0; i< 5; i++) {
        star[i].classList.remove('star-filled');
    }
    for(let i=0; i< filled; i++) {
        star[i].classList.add('star-filled');
    }
})

starContainer.addEventListener('click', function(e){
    filled = e.target.dataset.star;
    for(let i=0; i< 5; i++) {
        star[i].classList.remove('star-filled');
    }
    for(let i=0; i< filled; i++) {
        star[i].classList.add('star-filled');
    }
    countEl.innerHTML = `Star Rating is ${filled}`;
})