import { CARD_RANKS, CARD_SUITS } from "../constants";
import Card from "./Card";

const JOKER_CARDS = [new Card("Joker", "Black Joker"), new Card("Joker", "White Joker")];

class Deck {
	constructor(includeJokers) {
		this.deck = [];
		this.hasJokers = includeJokers || true;
		this.setDeck();
		console.log(this.deck);
	}

	deal() {
		return this.deck.pop();
	}

	setDeck() {
		for (let suit of CARD_SUITS) {
			for (let rank of CARD_RANKS) {
				this.deck.push(new Card(rank, suit));
			}
		}

		if (this.hasJokers) {
			this.deck = this.deck.concat(JOKER_CARDS);
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

	reset() {
		this.setDeck();
	}
}

export default Deck;
