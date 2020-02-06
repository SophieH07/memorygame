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
    let clickedCards = 0;
    for (let card of cards) {
        card.addEventListener('click', function (e) {
            clickedCards++;
            card.classList.add('clicked');
            card.classList.remove('hidden');
            setTimeout(gotPair, 500);
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
    let main = document.querySelector('.main');
    let allPairs = document.querySelectorAll('.pairs');
    let allPairList = Array.from(allPairs);
    console.log(allPairList);
    if (allPairList.length === 12) {
        let win = document.createElement('div');
        win.setAttribute('class', 'win');
        win.innerHTML = `<p>You win!</p><div class="restart">Restart</div>
        <img src="/static/cards/win.gif">`;
        main.appendChild(win);
    }
    rePlay();
}

function rePlay() {
    let restart = document.querySelector('.restart');
    restart.addEventListener("mouseover", function () {
        restart.classList.add('mouseon');
    });
    restart.addEventListener("mouseout", function () {
        restart.classList.remove('mouseon');
    });
    restart.addEventListener("click", function () {
        restart.classList.add('mouseclicked');
        randomizedCards();
        hideCards();
        showCards();
    })
}

randomizedCards();
hideCards();
showCards();