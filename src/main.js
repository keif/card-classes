import Deck from "./components/Deck";

console.table(playAGame());

function playAGame() {
    const deckOfCards = new Deck();
    try {
        return deckOfCards.makeDeck();
    } catch (error) {
        return new Error(error);
    }
}
