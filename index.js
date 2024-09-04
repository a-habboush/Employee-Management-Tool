
const searchbar = document.getElementById('searchBar');
const reqCards = document.querySelectorAll('.vacationReqBody .col');








searchbar.addEventListener('input', e => {
const inputValue = e.target.value.toLowerCase();


reqCards.forEach(card => {

    const isVisible = card.querySelector("h5").textContent.toLowerCase().includes(inputValue);
    card.classList.toggle("hide", !isVisible)
 
 })

})

    
    


    