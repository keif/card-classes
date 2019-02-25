class Player {
    constructor(playerName) {
        this.name = playerName;
        this.hand = [];
    }

    draw(deck) {
        const drawnCard = deck.deal();

        this.hand.push(drawnCard);

        return drawnCard;
    }

    discard(cardIndex) {
        if (cardIndex < 0 || cardIndex >= this.hand.length) {
            return null;
        } else {
            return this.hand.splice(cardIndex, 1)[0];
        }
    }

    showHand() {
        this.hand.forEach(function (card, idx) {
            console.log(`Card number ${idx}: ${card.rank} of ${card.suit}`);
        });
    }
}
