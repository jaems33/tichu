import React from 'react';
import Game from './Game';
import Team from '../models/Team';
import PlayerHand from '../models/PlayerHand';
import Player from '../models/Player';

const GameController: React.FunctionComponent<any> = (props) => {
  const players = props.players;
  
  let teams = [new Team(), new Team()];
  teams[0].addPlayer(players[0]);
  teams[0].addPlayer(players[1]);

  teams[1].addPlayer(players[2]);
  teams[1].addPlayer(players[3]);

  const playerHands: Array<PlayerHand> = players.map((player: Player) => {
    return new PlayerHand(player);
  });

  return (<Game playerHands={playerHands} />)

}

export default GameController;