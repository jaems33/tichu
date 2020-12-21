import React from 'react';
import PlayerHand from '../models/PlayerHand';
import HandContainer from './HandContainer';
import Trick from '../models/Trick';
import Hand from '../models/Hand';
import * as Validity from '../utilities/validity';

interface IBoard {
  playerHands: Array<PlayerHand> 
}

const Board: React.FunctionComponent<IBoard> = ({playerHands}) => {

  const trick = new Trick();
  const addHandToTrick = (playerHand: PlayerHand) => {
    const cards = playerHand.getHand().getCards();
    // No hands have been played in the trick yet
    if (trick.isEmpty() && Validity.checkFirstMove(cards)){
      trick.addPlayerHand(playerHand);
      return true;
    } else {
      const handType = trick.getHandType();
      // Hand given is the same as what was first given in the trick
      console.log(handType);
      if (handType !== null && Validity.checkValidSpecific(cards, handType).valid){
        const lastCardsPlayed = trick.getLastHandPlayed()?.getHand().getCards();
        // Hand given is greater than the most recent hand added to the trick
        if (lastCardsPlayed != null && Validity.isGreaterThan(cards, lastCardsPlayed, handType)){
          trick.addPlayerHand(playerHand);
          return true;
        }
      }
    }
    return false;
  }
  
  return (
  <section>
    {
      playerHands.map( (playerHand: PlayerHand, index: number) => {
        return (
        <div key={index}>
          <HandContainer playerHand={playerHand} addHandToTrick={addHandToTrick} />
        </div>)
      })
    }
  </section>)
}

export default Board;