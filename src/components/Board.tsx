import React, {useState} from 'react';
import PlayerHand from '../models/PlayerHand';
import HandContainer from './HandContainer';
import Trick from '../models/Trick';
import * as Validity from '../utilities/validity';
import ICard from '../interfaces/Card';
import Cards from '../components/Cards';

interface IBoard {
  playerHands: Array<PlayerHand> 
}

const trick = new Trick();

const Board: React.FunctionComponent<IBoard> = ({playerHands}) => {

  const [lastPlayed, setLastPlayed] = useState([] as ICard[]);

  const addHandToTrick = (playerHand: PlayerHand) => {
    const cards = playerHand.getHand().getCards();
    // No hands have been played in the trick yet
    if (trick.isEmpty() && Validity.checkFirstMove(cards)){
      trick.addPlayerHand(playerHand);
      setLastPlayed(playerHand.getHand().getCards());
      return true;
    } else {
      const handType = trick.getHandType();
      // Hand given is the same as what was first given in the trick
      if (handType !== null && Validity.checkValidSpecific(cards, handType).valid){
        const lastCardsPlayed = trick.getLastHandPlayed()?.getHand().getCards();
        // Hand given is greater than the most recent hand added to the trick
        if (lastCardsPlayed != null && Validity.isGreaterThan(cards, lastCardsPlayed, handType)){
          trick.addPlayerHand(playerHand);
          setLastPlayed(playerHand.getHand().getCards());
          return true;
        }
      }
    }
    return false;
  }
  
  return (
  <section>
    <div className="last-played">
      <h3>Last Played:</h3>
      {
        lastPlayed.length === 0 ? '' : <Cards cards={lastPlayed} />
      }
    </div>
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