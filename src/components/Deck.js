import Card from "./Card";

const CARD_RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const CARD_SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];

class Deck {
	constructor() {
		console.log("construct the deck of cards");
		this.deck = [];
	}
	deal() {}

	makeDeck() {
		console.log("make a deck of cards");
		this.deck = CARD_SUITS.map((suitVal, suitIdx, suitArr) =>
			CARD_RANKS.map((rankVal, rankIdx, rankArr) => new Card(rankVal, suitVal))
		);
	}

	shuffle() {}
}

export default Deck;
