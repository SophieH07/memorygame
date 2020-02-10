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
        card.classList.remove('clicked');
    }
}

function showCards() {
    let cards = document.querySelectorAll('.card');
    for (let card of cards) {
        card.addEventListener('click', function () {
            let clicked = Array.from(document.querySelectorAll('.clicked'));
            if(clicked.length < 2){
                card.classList.add('clicked');
                setTimeout((card.classList.remove('hidden'), 3000));
                setTimeout(gotPair, 2000);
            }
        });
    }
}

function gotPair() {
    let clickedCards = document.querySelectorAll('.clicked');
    let cardName1 = clickedCards.item(0).dataset.name;
    let cardName2 = clickedCards.item(1).dataset.name;
    if (cardName1 === cardName2) {
        for (let clickedCard of clickedCards) {
            clickedCard.classList.remove('clicked');
            clickedCard.classList.add('pairs');
        }
    } else {
        hideCards();
    }
    ifWon();
}

function ifWon() {
    let winDiv = document.querySelector('.win');
    let allPairs = document.querySelectorAll('.pairs');
    let allPairList = Array.from(allPairs);
    if (allPairList.length === 12) {
        let winText = document.createElement('div');
        winText.setAttribute('class', 'win');
        winText.innerHTML = `<p>You win!</p><div class="restart"><span>Restart</span></div>
        <img src="/static/cards/win.gif" class="winner-gif">`;
        winDiv.appendChild(winText);
    }
    replay();
}

function replay() {
    let restart = document.querySelector('.restart');
    restart.addEventListener("click", function () {
        location.reload();
    });
}


randomizedCards();
hideCards();
showCards();