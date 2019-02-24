const CARD_RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const CARD_SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];

class Card {
    constructor(rank, suit) {
        console.log("new Card:", rank, suit);
        this.rank = rank;
        this.suit = suit;
        this.value = CARD_RANKS.indexOf(rank);
    }
};

export default Card;