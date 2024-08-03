//my deck was created in a separate one. if i ever need to use cards for something else... ctrl v, ctrl c!//
import Deck from "./Deck.js";

const deck = new Deck();
deck.shuffle();

class Player {
  constructor(name, deck) {
    this.name = name;
    this.score = 0;
    this.deck = deck;
  }
  drawCard() {
    return this.deck.pop();
  }
  addScore(points) {
    return (this.score += points);
  }
}

let player1 = new Player("Player 1", deck.cards.slice(0, 26));
let player2 = new Player("Player 2", deck.cards.slice(26, 52));

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }
  /*each player starts w/ 26 cards
each player draws 1
highest # wins*/
  playRound() {
    for (let round = 0; round < 26; round++) {
      let card1 = this.player1.drawCard();
      let card2 = this.player2.drawCard();

      if (card1.getNumericValue() > card2.getNumericValue()) {
        this.player1.addScore(1);
        console.log(
          `Round ${round}: Player 1 wins with ${card1.getNumericValue()} versus ${card2.getNumericValue()}!`
        );
      } else if (card1.getNumericValue() < card2.getNumericValue()) {
        this.player2.addScore(1);
        console.log(
          `Round ${round}: Player 2 wins with ${card2.getNumericValue()} versus ${card1.getNumericValue()}!`
        );
      } else {
        console.log(`Tie! No one wins this round.`);
      }
    }
  }
  //determines the winner//
  gameOver() {
    if (this.player1.score > this.player2.score) {
      console.log("Player 1 is the winner!");
    } else if (this.player1.score < this.player2.score) {
      console.log("Player2 is the winner!");
    } else {
      console.log("Tie! No winner. 😢");
    }
  }
  //start over//
  reset() {
    this.player1.score = 0;
    this.player2.score = 0;
    this.player1.deck = [];
    this.player2.deck = [];
  }
}
//makes our game functional in the console//
let game = new Game(player1, player2);
game.playRound();
game.gameOver();
