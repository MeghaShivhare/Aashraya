
// sticky nav bar START------------------------------------------------------------
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('nav');
    if(this.window.pageYOffset > 100) //scroll value  
    {
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
});

//sticky nav bar END-------------------------------------------------------------------------


// auto suggest search box-------------------------------------------------------------------------------------------

const searchWrapper = document.querySelector(".search-input");
const inputBox = document.querySelector("input");
const suggBox = document.querySelector(".autocom-box");

inputBox.onkeyup = (e)=>{
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            //filtering array and user char to lowercase and return only those word which starts with user entered word
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
            
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active");  //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onClick","select(this)");
            
        }
    }   
    else{
        searchWrapper.classList.remove("active");  //hide autocomplete box
    }
    
}  

function select(element){
    let selectUserData = element.textContent;
    inputBox.value = selectUserData; //passing the user selected list item in textfield   
    searchWrapper.classList.remove("active");  //hide autocomplete box 
}


function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData  = '<li>'+ userValue + '</li>';

    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}


// end of search box -------------------------------------------------------------------------------------

// start of review section -------------------------------------------------------------------------------------
// start of review section -------------------------------------------------------------------------------------
