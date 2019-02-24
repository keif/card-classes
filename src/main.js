import Deck from "./components/Deck";

playAGame();

function playAGame() {
    const deckOfCards = new Deck();
    try {
        deckOfCards.shuffle();
    } catch (error) {
        return new Error(error);
    }
}
