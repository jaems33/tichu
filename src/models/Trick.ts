import Hand from './Hand';
import HandType from '../interfaces/HandType';
import PlayerHand from '../models/PlayerHand';
import * as Validity from '../utilities/validity';
import Card from '../interfaces/Card';

class Trick {
  playedHands: Array<PlayerHand>;
  handType: HandType | null;
  constructor(){
    this.playedHands = [];
    this.handType = null;
  }
  addPlayerHand(playerHand: PlayerHand){
    this.playedHands.push(playerHand);
    if (this.playedHands.length === 1){
      this.populateHandType(playerHand.getHand());
    }
  }
  getMostRecentPlayedHand(){
    if (this.isEmpty()) return null;
    return this.playedHands[this.playedHands.length-1];
  }
  getHandType(){
    return this.handType !== null ? this.handType : null;
  }
  populateHandType(hand: Hand){
    console.log("Populating handType:", hand);
    const handType = Validity.getHandType(hand.getCards());
    if (handType !== null){
      this.handType = handType;
    }
  }
  isEmpty() {
    return this.playedHands.length === 0;
  }
  getLastHandPlayed(){
    return this.isEmpty() ? null : this.playedHands[this.playedHands.length-1];
  }
  flattenToHand(){
    const output = this.playedHands.reduce((acc: Array<Card> , playerHand: PlayerHand) => {
      return playerHand.getHand().getCards();
    }, [] as Array<Card>);
    return output;
  }
}

export default Trick;