//WHAT'S ACTUALLY GOING TO BE ON OUR CARDS//
const Characters = ["♠", "♣", "♥", "♦"];
const Values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
//this is my deck class//
//the export default will make this useable for other files//
export default class Deck {
  constructor(cards = newDeck()) {
    this.cards = cards;
  }
  //the shuffle function should be within the class to make it automatic for the game. loop for our cards and swapping them
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const newPile = Math.floor(Math.random() * (i + 1));
      const oldPile = this.cards[newPile];
      this.cards[newPile] = this.cards[i];
      this.cards[i] = oldPile;
    }
  }
}

//here shows that each card will have a suit AND a value//
class Card {
  constructor(character, value) {
    this.character = character;
    this.value = value;
  }
  //this makes my cards actually have a value that can be compared to see which is greater and lesser than..//
  getNumericValue() {
    const valueMap = {
      A: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      J: 11,
      Q: 12,
      K: 13,
    };
    return valueMap[this.value];
  }
}

//this is to actually create my cards. combining the suits and value arrays.//
function newDeck() {
  return Characters.flatMap((character) => {
    return Values.map((value, i) => {
      return new Card(character, value);
    });
  });
}
