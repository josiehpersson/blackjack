const outputArea = document.getElementById('output-area'); //där korten ska visas
const newGameButton = document.getElementById('newgame-button');
const hitButton = document.getElementById('hit-button');
const stayButton = document.getElementById('stay-button');
const winnerArea = document.getElementById('winner-area');

let playerScore = 0;
let dealerScore = 0;





let cards = [
         {
        name: 'aofspades',
        card: '🂡',
        value: 1
    },
         {
        name: '2ofspades',
        card: '🂢',
        value: 2
    },
         {
        name: '3ofspades',
        card: '🂣',
        value: 3
    },
         {
        name: '4ofspades',
        card: '🂤',
        value: 4
    },
    {
        name: '5ofspades',
        card: '🂥',
        value: 5
    },
    {
        name: '6ofspades',
        card: '🂦',
        value: 6
    },
    {
        name: '7ofspades',
        card: '🂧',
        value: 7
    },
    {
        name: '8ofspades',
        card: '🂨',
        value: 8
    },
    {
        name: '9ofspades',
        card: '🂩',
        value: 9
    },
    {
        name: '10ofspades',
        card: '🂪',
        value: 10
    },
    {
        name: 'jofspades',
        card: '🂫',
        value: 10
    },
    {
        name: 'qofspades',
        card: '🂭',
        value: 10
    },
    {
        name: 'kofspades',
        card: '🂮',
        value: 10
    },
    {
        name: 'aofhearts',
        card: '🂱',
        value: 1
    },
         {
        name: '2ofhearts',
        card: '🂲',
        value: 2
    },
         {
        name: '3ofhearts',
        card: '🂳',
        value: 3
    },
         {
        name: '4ofhearts',
        card: '🂴',
        value: 4
    },
    {
        name: '5ofhearts',
        card: '🂵',
        value: 5
    },
    {
        name: '6ofhearts',
        card: '🂶',
        value: 6
    },
    {
        name: '7ofhearts',
        card: '🂷',
        value: 7
    },
    {
        name: '8ofhearts',
        card: '🂸',
        value: 8
    },
    {
        name: '9ofhearts',
        card: '🂹',
        value: 9
    },
    {
        name: '10ofhearts',
        card: '🂺',
        value: 10
    },
    {
        name: 'jofhearts',
        card: '🂻',
        value: 10
    },
    {
        name: 'qofhearts',
        card: '🂽',
        value: 10
    },
    {
        name: 'kofhearts',
        card: '🂾',
        value: 10
    },
    {
        name: 'aofdiamonds',
        card: '🃁',
        value: 1
    },
         {
        name: '2ofdiamonds',
        card: '🃂',
        value: 2
    },
         {
        name: '3ofdiamonds',
        card: '🃃',
        value: 3
    },
         {
        name: '4ofdiamonds',
        card: '🃄',
        value: 4
    },
    {
        name: '5ofdiamonds',
        card: '🃅',
        value: 5
    },
    {
        name: '6ofdiamonds',
        card: '🃆',
        value: 6
    },
    {
        name: '7ofdiamonds',
        card: '🃇',
        value: 7
    },
    {
        name: '8ofdiamonds',
        card: '🃈',
        value: 8
    },
    {
        name: '9ofdiamonds',
        card: '🃉',
        value: 9
    },
    {
        name: '10ofdiamonds',
        card: '🃊',
        value: 10
    },
    {
        name: 'jofdiamonds',
        card: '🃋',
        value: 10
    },
    {
        name: 'qofdiamonds',
        card: '🃍',
        value: 10
    },
    {
        name: 'kofdiamonds',
        card: '🃎',
        value: 10
    },
    {
        name: 'aofclubs',
        card: '🃑',
        value: 1
    },
         {
        name: '2ofclubs',
        card: '🃒',
        value: 2
    },
         {
        name: '3ofclubs',
        card: '🃓',
        value: 3
    },
         {
        name: '4ofclubs',
        card: '🃔',
        value: 4
    },
    {
        name: '5ofclubs',
        card: '🃕',
        value: 5
    },
    {
        name: '6ofclubs',
        card: '🃖',
        value: 6
    },
    {
        name: '7ofclubs',
        card: '🃗',
        value: 7
    },
    {
        name: '8ofclubs',
        card: '🃘',
        value: 8
    },
    {
        name: '9ofclubs',
        card: '🃙',
        value: 9
    },
    {
        name: '10ofclubs',
        card: '🃚',
        value: 10
    },
    {
        name: 'jofclubs',
        card: '🃛',
        value: 10
    },
    {
        name: 'qofclubs',
        card: '🃝',
        value: 10
    },
    {
        name: 'kofclubs',
        card: '🃞',
        value: 10
    },
];

let deck  = [];
let dealer = [];
let player = [];

newGameButton.addEventListener('click', newGame = () => {

    startNewGame();
}); 

hitButton.addEventListener('click', function(){
    dealAnotherCard(player);
    showHands();
        let winner = determineWinner();
        if(winner !== '')
        {
            winnerArea.innerHTML = winner;
            hideGameButtons();
        }
    
});

stayButton.addEventListener('click', function() {
    while ((playerScore > dealerScore || (playerScore <= dealerScore && dealerScore <= 16))
         && playerScore <= 21 && dealerScore <=21) {
        dealAnotherCard(dealer);
        showHands(true);
        //console.log(dealerScore, playerScore, dealer);
    }
    showHands(true);
    let winner = determineWinner(true);
    if(winner !== '')
    {
        winnerArea.innerHTML = winner;
    }
    hideGameButtons();
}); 

startNewGame = () => {
    showGameButtons();
    winnerArea.innerHTML = '';
    deck = [];
    player = [];
    dealer = [];
    shuffleDeck();
    dealInitialCards();
};


showHands = (stayed = false) => {
    playerScore = calculateHand(player);
    dealerScore = calculateHand(dealer);
    clearTable();
    showHand(player, playerScore);
    showHand(dealer, dealerScore);

}

/* -----------CATHERINES LÖSNING
dealAnotherCard = (hand) => {
showHand(dealer);
showHand(player);
hand.push(drawCard());
} */

dealAnotherCard = (hand) => {
    hand.push(drawCard());
}



shuffleDeck = () => {
    let tmpDeck = [...cards];
    let pos;
    while (tmpDeck.length > 0){
        pos = (Math.floor(Math.random() * tmpDeck.length));
        let card = tmpDeck.splice(pos, 1);
        deck.push(...card);
    }
};

drawCard = () => {
    return deck.shift();
};


showHand = (hand, score) => {
    let cards = '';
    for(let i = 0; i < hand.length; i++) {
        cards += hand[i].card;
    }
    
    return outputArea.innerHTML += `${cards} ${score} <br>`;
    /* let playerCards = '';
    let dealerCards = '';
    let cards = `${playerCards} ${dealerCards}`; 
    for (let i=0; i < player.length; i++) {
        playerCards += player[i].card;
    }
    for (let j=0; j < dealer.length; j++) {
        dealerCards += dealer[j].card;
    } 
    outputArea.innerHTML += `${playerCards} <br> ${dealerCards}`;
*/
}
clearTable = () => {
    outputArea.innerHTML = '';
}
calculateHand = (hand) => {
    //console.log(dealerScore, playerScore, dealer);
    let score = 0;
    let hasAce = hand.find( c => c.value === 1) !== undefined;
    
    hand.forEach(card => score += card.value);
    if(hasAce && score +10 <= 21){
        score += 10;
    }
    
    return score;

}

dealInitialCards  = () => {
clearTable();
player.push(drawCard());
player.push(drawCard());
dealer.push(drawCard());
dealer.push(drawCard());
showHands();
}

hasBlackJack = (hand, score) => {
if (hand === 2 && score ===21 || score === 21) return true;
}

isBust = (score) => {
    if (score > 21) return true;
    false;
}

determineWinner =(stayed = false) => {
    const dealerWins = `Tyvärr, du förlorade.`;
    const playerWins = `Grattis, du vann!`;
    const draw = `Det blev oavgjort.`;
    //debugger;
    if (isBust(playerScore)) return dealerWins; 
    else if (isBust(dealerScore)) return playerWins;
    else if (dealer.length == 5 && dealerScore >= 21) return dealerWins;
    else if (dealerScore === playerScore && stayed) return draw;
    else if (playerScore > dealerScore && stayed) return playerWins;
    else if (dealerScore > playerScore && stayed) return dealerWins;
    else {
        let dealerBJ = hasBlackJack(dealer, dealerScore);
        let playerBJ = hasBlackJack(player, playerScore); 
        if (dealerBJ === true && playerBJ === true) return draw;
        if (playerBJ === true) return playerWins;
        if(dealerBJ === true) return dealerWins;
    };
    return '';
};



showGameButtons = () => {
    newGameButton.style.display = 'none';
    stayButton.style.display ='inline';
    hitButton.style.display = 'inline';
}
hideGameButtons = () => {
    newGameButton.style.display = 'inline';
    stayButton.style.display ='none';
    hitButton.style.display = 'none';
}
hideGameButtons();
/* 
------------------MATTIAS LÖSNING--------------------
const deck = fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
  .then(response => {
    if (response.status !== 200) {
      throw new Error("Usuccessful request to deckofcardapi.com");
    }
    return response.json();
  })
  .then(json => console.log(json))
  .catch(error => console.log(error));
 */