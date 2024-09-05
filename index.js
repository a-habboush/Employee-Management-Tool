
const searchbarHome = document.getElementById('searchBar');
const reqCards = document.querySelectorAll('.vacationReqBody .col');
const viewProf = document.getElementById('viewProfile');



// view profile button on home page
viewProf.addEventListener('click', () => {
    window.location.href = "profile.html";
})


// search functionality

searchbarHome.addEventListener('input', e => {
const inputValue = e.target.value.toLowerCase();

reqCards.forEach(card => {

    const isVisible = card.querySelector("h5").textContent.toLowerCase().includes(inputValue);
    card.classList.toggle("hide", !isVisible)
 
 })

})












    