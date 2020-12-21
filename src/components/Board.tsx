import React from 'react';
import PlayerHand from '../models/PlayerHand';
import HandContainer from './HandContainer';


interface IBoard {
  playerHands: Array<PlayerHand> 
}

const Board: React.FunctionComponent<IBoard> = ({playerHands}) => {

  return (
  <section>
    {
      playerHands.map( (playerHand: PlayerHand, index: number) => {
        return (
        <div key={index}>
          <HandContainer playerHand={playerHand} />
        </div>)
      })
    }
  </section>)
}

export default Board;