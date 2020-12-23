import React, {useEffect, useState} from 'react';
import Deck from '../models/Deck';
import Team from '../models/Team';
import Player from '../models/Player';
import PlayerHand from '../models/PlayerHand';
import Board from '../components/Board';
import {MAHJONG_VALUE} from '../utilities/constants'

import {connect} from 'react-redux';
import {updateCurrentTurn, updatePlayers} from '../redux/actions';

const Game: React.FunctionComponent<any> = (props) => {

  const playerHands = props.playerHands;

  const [loaded, setLoaded] = useState(false);

  useEffect( () => {
    const deck = new Deck();
    dealHands(playerHands, deck);
    for (let hand of playerHands){
      hand.sortHand();
    }
    props.dispatch(updatePlayers(playerHands.map((player: PlayerHand) => player.getPlayer().getId())));
    const playerWhoGoesFirst = whoHasMahjong(playerHands);
    if (playerWhoGoesFirst != null){
      for (let i = 0; i < playerHands.length; ++i){
        if (playerHands[i].getPlayer().getId() === playerWhoGoesFirst){
          props.dispatch(updateCurrentTurn(playerWhoGoesFirst, i));
          break;
        }
      }
    }
    console.log("Player hands", playerHands);
    setLoaded(true);
  }, []);

  // Start the first trick with who has the mahjong card

  return(<div>{ loaded === true ? <Board playerHands={playerHands} /> : ''}</div>)
}

function whoHasMahjong(playerHands: Array<PlayerHand>){
  for (let playerHand of playerHands){
    const cards = playerHand.getHand().getCards();
    for (let card of cards){
      if (card.value === MAHJONG_VALUE) return playerHand.getPlayer().getId();
    }
  }
  return null;
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

function mapStateToProps(state: any, props: any){
  return {
    state: state,
  ...props 
  }
}

export default connect(mapStateToProps)(Game);