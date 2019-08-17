var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: "images/king-of-diamonds.png"
  }
];

//cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];

function checkForMatch() {
  document.getElementById('game-board').setAttribute('src', cards.cardImage);
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("you found a match!");
  } else {
    alert("Sorry, try again.");
  };
};

function flipCard() {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  cardsInPlay.push(cards[cardId].rank);

  if (cardsInPlay.length === 2) {
    checkForMatch();
  };
};

function createBoard() {
  for(var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
    //cardElement.appendChild('game-board');
  };

};

createBoard();



/*var cardOne;
cardOne = cards[0];
cardsInPlay.push(cardOne);

var cardTwo;
cardTwo = cards[2];
cardsInPlay.push(cardTwo);*/





//console.log(cardsInPlay);
//console.log("User flipped " + cardsInPlay);
