import ICard from '../interfaces/Card';

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
}

export default Hand;