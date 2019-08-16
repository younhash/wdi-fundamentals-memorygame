console.log("Up and running!");

cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];
var cardOne;
cardOne = cards[0];
cardsInPlay.push(cardOne);



var cardTwo;
cardTwo = cards[2];
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("you found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

console.log(cardsInPlay);
console.log("User flipped " + cardsInPlay);
