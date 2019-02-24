import { CARD_RANKS, CARD_SUITS } from "../constants";
import Card from "./Card";

const JOKER_CARDS = [
	new Card("Joker", "Black Joker"),
	new Card("Joker", "White Joker")
];

class Deck {
	constructor(includeJokers) {
		this.deck = [];
		this.setDeck(includeJokers);
		console.log(this.deck);
	}

	deal(numCards) {
		console.log("deal a hand");
		const handOfCards = [];

		for (let idx = 0; idx < numCards; idx += 1) {
			handOfCards.push(this.deck.splice(idx, idx));
		}

		console.log(handOfCards);
		return handOfCards;
	}

	setDeck(includeJokers) {
		for (let suit of CARD_SUITS) {
			for (let rank of CARD_RANKS) {
				this.deck.push(new Card(rank, suit));
			}
		}

		if (includeJokers) {
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
}

export default Deck;
