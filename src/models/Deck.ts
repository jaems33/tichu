import Card from '../interfaces/Card';
import { SUITS, MIN_VALUE, MAX_VALUE, 
  DRAGON_SUIT, DRAGON_VALUE, 
  MAHJONG_SUIT, MAHJONG_VALUE, 
  DOG_SUIT, DOG_VALUE, 
  PHOENIX_SUIT, PHOENIX_VALUE
} from '../utilities/constants';
import {shuffle} from '../utilities/shuffle';
import { v4 as uuidv4 } from 'uuid';

class Deck {
  cards: Array<Card>;
  constructor(){
    this.cards = this.populateDeck();
    shuffle(this.cards);
  }
  populateDeck(){
    const cards = [];
    
    for (let i = MIN_VALUE; i <= MAX_VALUE; ++i){
      for (let suit of SUITS){
        cards.push({
          value: i,
          suit: suit,
          id: uuidv4()
        })
      }
    }
    cards.push({ value: DRAGON_VALUE, suit: DRAGON_SUIT, id: uuidv4()});
    cards.push({ value: PHOENIX_VALUE, suit: PHOENIX_SUIT, id: uuidv4()});
    cards.push({ value: DOG_VALUE, suit: DOG_SUIT, id: uuidv4()});
    cards.push({ value: MAHJONG_VALUE, suit: MAHJONG_SUIT, id: uuidv4()});
    return cards;
  }
  deal() {
     if (this.cards.length === 0){
       return {
         empty: true
       }
     } else {
       return {
        empty: false,
        card: this.cards.pop() 
      }
     }
  }
}

export default Deck;