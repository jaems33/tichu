import Player from './Player'
import Hand from './Hand';
import Card from '../interfaces/Card';

class PlayerHand {
  player: Player;
  hand: Hand;
  constructor(player: Player){
    this.player = player;
    this.hand = new Hand();
  }
  addCard(card: Card){
    this.hand.addCard(card);
  }
  getHand(){
    return this.hand.getHand();
  }
}

export default PlayerHand;