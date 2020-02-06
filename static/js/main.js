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
    let clickedCardss = 0;
    for (let card of cards) {
        card.addEventListener('click', function (e) {
            clickedCardss++;
            card.classList.add('clicked');
            card.classList.remove('hidden');
            clickedCards();
        });
    }
}

function clickedCards() {
    let clickedCards = document.querySelectorAll('.clicked');
    let cardName1 = clickedCards.item(0).dataset.name;
    let cardName2 = clickedCards.item(1).dataset.name;
    if (cardName1 === cardName2) {
        alert('you got a pair');
    }
    console.log(clickedCards);
}

randomizedCards();
hideCards();
showCards();
