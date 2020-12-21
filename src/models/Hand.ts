import ICard from '../interfaces/Card';

function compare(card_a: ICard, card_b: ICard){
  if (card_a.value < card_b.value) return -1;
  else if (card_a.value > card_b.value) return 1;
  else {
    if (card_a.suit < card_b.suit) return -1;
    else if (card_a.suit > card_b.suit) return 1;
  }
  return 0;
}

class Hand {
  cards: Array<ICard>;
  constructor(){
    this.cards = [];
  }
  addCard(card: ICard){
    this.cards.push(card);
  }
  removeCard(cardToRemove: ICard){
    this.cards.filter((card: ICard) => {
      return card.suit !== cardToRemove.suit && card.value !== cardToRemove.value;
    })
  }
  getHand(){
    return this.cards;
  }
  sort(){
    this.cards.sort(compare);
  }
}

export default Hand;