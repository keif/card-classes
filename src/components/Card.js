import { CARD_RANKS, CARD_SUITS, SUIT_SYMBOLS } from "../constants";

class Card {
    constructor(rank, suit) {
        // console.log("Card: ", rank, suit);
        this.rank = rank;
        this.suit = suit;
        this.symbol = SUIT_SYMBOLS[CARD_SUITS.indexOf(suit)];
        this.value = CARD_RANKS.indexOf(rank) + 1;
    }
};

export default Card;