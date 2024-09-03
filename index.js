
const searchbar = document.getElementById('searchBar');
const vacReqCards = document.getElementById('cardList');
const reqCards = document.querySelectorAll('.vacationReqBody .col');
const empName = document.querySelectorAll('.vacationReqBody .col h4');







searchbar.addEventListener('input', e => {
const inputValue = e.target.value.toLowerCase();


reqCards.forEach(card => {

    const isVisible = card.querySelector("h4").textContent.toLowerCase().includes(inputValue);
    card.classList.toggle("hide", !isVisible)
 
 })

})

    
    


    