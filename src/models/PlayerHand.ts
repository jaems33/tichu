import Player from './Player'
import Hand from './Hand';
import Card from '../interfaces/Card';

class PlayerHand {
  player: Player;
  hand: Hand;
  constructor(player: Player, hand?: Hand){
    this.player = player;
    this.hand = hand != null ? hand : new Hand();
  }
  addCard(card: Card){
    this.hand.addCard(card);
  }
  getHand(){
    return this.hand;
  }
  sortHand(){
    this.hand.sort();
  }
  getPlayer(){
    return this.player;
  }
  removeCards(hand: Hand){
    this.hand.subtract(hand);
  }
}

export default PlayerHand;