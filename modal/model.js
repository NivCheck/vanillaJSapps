let btn = document.getElementById('btn');
let modal = document.getElementById('modal');
let closebtn = document.getElementById('close-btn');

btn.addEventListener('click', function() {
    modal.style.display = 'block'
})

closebtn.addEventListener('click', function() {
    modal.style.display = 'none'
})