import './style.css';

const suggestionList = ["apple", "ball", "cat", "aerop"];
const suggWrapper = document.getElementsByClassName("suggestion-wrapper")[0];

 function inputHandle(e) {
    let keyword = e.target.value;
    let suggs = getSuggestions(keyword);
    suggWrapper.innerHTML = '';
    addSuggestions(suggs);
}

function addSuggestions(suggs) {
    if(suggs.length > 0){
        suggWrapper.classList.add('visible');
        suggs.forEach(item => {
            let sugg = document.createElement('div');
            sugg.innerHTML = item;
            suggWrapper.appendChild(sugg);
        });
        
    } else {
        suggWrapper.classList.remove('visible');
    }
}

function getSuggestions (key) {
    let filtersuggs = suggestionList.filter((i)=> {
       return i.substring(0,key.length).toLowerCase() === key.toLowerCase();
    });
    return filtersuggs;
    // return new Promise((res)=>{
    //     setTimeout(()=>{
    //         return res(filtersuggs);
    //     },1000)
    //    })
    }
    
(()=>{
    let autocompleteEl = document.getElementById('autocomplete');
    autocompleteEl.addEventListener('input', inputHandle);
})()