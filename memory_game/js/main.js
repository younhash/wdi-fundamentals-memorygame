console.log("Up and running!");

cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("you found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

function flipCard(cardId) {
  console.log("User flipped " + cards[cardId]);

  cardsInPlay.push(cards[cardId]);

  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

flipCard(0);
flipCard(2);



/*var cardOne;
cardOne = cards[0];
cardsInPlay.push(cardOne);

var cardTwo;
cardTwo = cards[2];
cardsInPlay.push(cardTwo);*/





console.log(cardsInPlay);
console.log("User flipped " + cardsInPlay);
