const trollcards = document.querySelectorAll(".info-card");
const y_n_cards = document.querySelectorAll(".card");
const trolltxt = document.createElement("div");
trolltxt.textContent = "That is NOT a button that links to another website";
trolltxt.style.fontSize = "32px";
trolltxt.style.display = "none";
trolltxt.style.padding = "10px";
document.body.appendChild(trolltxt); 

let y_n = false;

function handleTrollClick() {
    y_n_cards.forEach(card => {
        if (y_n === false) {
            card.style.visibility = "hidden";
        } else {
            card.style.visibility = "visible";
        }
    });

    if (y_n === false) {
        trolltxt.style.display = "block";
    } else {
        trolltxt.style.display = "none";
    }

    y_n = !y_n;
}

trollcards.forEach(button => {
    button.addEventListener('click', handleTrollClick);
});
