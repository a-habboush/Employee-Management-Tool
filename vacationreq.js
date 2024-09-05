const searchbarMain = document.getElementById('searchBarMain');
const reqCardsMain = document.querySelectorAll('.vacationReqBody .col');



// select all functionality
const selectAll = document.querySelector('.SelectAllButton');
const cardCheckboxes = document.querySelectorAll('.cardCheckbox');

selectAll.checked = false;

selectAll.addEventListener('click', ()=>{
let isChecked = selectAll.checked;

if (isChecked){
   
cardCheckboxes.forEach(checkbox => {
    checkbox.classList.remove('hide');
    checkbox.checked = true;
})
}

else{
    
    cardCheckboxes.forEach(checkbox => {
        checkbox.classList.add('hide');
    })
}
})



// search functionality
searchbarMain.addEventListener('input', e => {
    const inputValue = e.target.value.toLowerCase();

    
    reqCardsMain.forEach(card => {
    
        const isVisible = card.querySelector("h5").textContent.toLowerCase().includes(inputValue);
        card.classList.toggle("hide", !isVisible)
     
     })
    
    })