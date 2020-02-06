function randomizedCards() {
    let playField = document.querySelector('.playing-field');
    for (let i = playField.children.length; i >= 0; i--) {
        playField.appendChild(playField.children[Math.random() * i | 0]);
    }
}

function hideCards() {
    let cards = document.querySelectorAll('.card');
    for (let card of cards) {
        card.classList.add('hidden');
    }
}

function showCards() {
    let cards = document.querySelectorAll('.card');
    for (let card of cards) {
        card.addEventListener('click', function (e) {
            card.classList.add('clicked');
            card.classList.remove('hidden');
            clickedCards(card);
        });
    }
}

function clickedCards(card) {
    let clickedCards = document.querySelectorAll('.clicked');
    let cardsList = Array.from(clickedCards);
    for (let cardElement of cardsList) {
        if (clickedCards.length === 2) {
            let cardName1 = cardsList[0].dataset.name;
            let cardName2 = cardsList[1].dataset.name;
            if (cardName1 === cardName2) {
                card.classList.add('clicked');
                card.classList.remove('hidden');
                alert('you got a pair');
            }
        }
    }
    console.log(clickedCards);
}

randomizedCards();
hideCards();
showCards();
