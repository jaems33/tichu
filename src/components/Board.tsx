import React from 'react';
import PlayerHand from '../models/PlayerHand';
import Cards from './Cards';

interface IBoard {
  playerHands: Array<PlayerHand> 
}

const Board: React.FunctionComponent<IBoard> = ({playerHands}) => {
  return (
  <section>
    {
      playerHands.map((playerHand: PlayerHand, index: number) => {
        return (
        <div key={index}>
          <h3>{playerHand.player}</h3>
          <Cards cards={playerHand.getHand()} />
        </div>)
      })
    }
  </section>)
}

export default Board;