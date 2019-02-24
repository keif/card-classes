import Card from "./Card";

const CARD_RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const CARD_SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];

class Deck {
	constructor() {
		this.deck = [];
		this.setDeck();
	}

	deal() {}

	setDeck() {
		for (let suit of CARD_SUITS) {
			for (let rank of CARD_RANKS) {
				this.deck.push(new Card(rank, suit));
			}
		}
	}

	shuffle() {
		let currentIndex = this.deck.length;

		while (0 !== currentIndex) {
			let randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			let temporaryValue = this.deck[currentIndex];
			this.deck[currentIndex] = this.deck[randomIndex];
			this.deck[randomIndex] = temporaryValue;
		}
	}
}

export default Deck;
