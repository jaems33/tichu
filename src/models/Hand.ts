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
  constructor(cards?: Array<ICard>){
    this.cards = cards != null ? cards : [];
  }
  addCard(card: ICard){
    this.cards.push(card);
  }
  removeCard(cardToRemove: ICard){
    this.cards.filter((card: ICard) => {
      return card.suit !== cardToRemove.suit && card.value !== cardToRemove.value;
    })
  }
  getCards(){
    return this.cards;
  }
  sort(){
    this.cards.sort(compare);
  }
  subtract(hand: Hand){
    let cardsToRemove = new Set(hand.getCards());
    this.cards = this.cards.filter((card: ICard) => {
      return !cardsToRemove.has(card);
    })
  }
}

export default Hand;