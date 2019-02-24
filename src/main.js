import Deck from "./components/Deck";

playAGame();

function playAGame(needJokers) {
    // create the full deck
    const includeJokers = needJokers || true;
    const deckOfCards = new Deck(includeJokers);
    try {
        // console.log("shuffle the deck");
        // deckOfCards.shuffle();
        deckOfCards.deal(7);
    } catch (error) {
        return new Error(error);
    }
}
