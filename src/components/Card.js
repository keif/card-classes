const CARD_RANKS = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
const CARD_SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
const SUIT_SYMBOLS = ["♣︎", "♦", "♥︎", "♠︎"];


class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
        this.symbol = SUIT_SYMBOLS[CARD_SUITS.indexOf(suit)];
        this.value = CARD_RANKS.indexOf(rank);
    }
};

export default Card;