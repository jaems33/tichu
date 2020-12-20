import React from 'react';
import Deck from '../models/Deck';
import Team from '../models/Team';
import Player from '../models/Player';
import PlayerHand from '../models/PlayerHand';
import Board from '../components/Board';

const Game: React.FunctionComponent<any> = ({players}) => {
  
  let teams = [new Team(), new Team()];
  teams[0].addPlayer(players[0]);
  teams[0].addPlayer(players[1]);

  teams[1].addPlayer(players[2]);
  teams[1].addPlayer(players[3]);

  const playerHands: Array<PlayerHand> = players.map((player: Player) => {
    return new PlayerHand(player);
  })

  const deck = new Deck();
  dealHands(playerHands, deck);

  console.log(playerHands);

  return(<Board playerHands={playerHands} />)
}

function dealHands(playerHands: Array<PlayerHand>, deck: Deck){
  let index = 0;
  while(true){
    const {card, empty} = deck.deal();
    if (card && !empty){
      playerHands[index].addCard(card);
    } else {
      break;
    }
    index = (index + 1) % playerHands.length;
  }
}

export default Game;