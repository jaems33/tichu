import React, {useState, useEffect} from 'react';
import PlayerHand from '../models/PlayerHand';
import SelectableCards from './SelectableCards';
import Card from '../interfaces/Card';
import Hand from '../models/Hand';
import TurnControls from './TurnControls'

interface IHandContainer {
  playerHand: PlayerHand;
  addHandToTrick: Function;
}

const HandContainer: React.FunctionComponent<IHandContainer> = ({playerHand, addHandToTrick}) => {
  
  const [selected, setSelectedCards] = useState(new Set<Card>());

  const handler = (card: Card) => {
    if (selected.has(card)){
      setSelectedCards((items) => {
        const newSet = new Set(items);
        newSet.delete(card);
        return newSet;
      })
    } else {
      setSelectedCards((items) => {
        const newSet = new Set(items);
        newSet.add(card);
        return newSet;
      })
    }
  }

  const submitHand = () => {
    const hand = new Hand(Array.from(selected));
    const playerHandToSubmit = new PlayerHand(playerHand.getPlayer(), hand);
    const response = addHandToTrick(playerHandToSubmit);
    if (response){
      playerHand.removeCards(hand);
      setSelectedCards(new Set<Card>());
    }
  }

  console.log("Selected Cards", selected);

  const playerName = playerHand.getPlayer().getName();

  return (
    <div>
      <h3>{playerName}</h3>
      <TurnControls submitHand={submitHand} />
      <SelectableCards cards={playerHand.getHand().getCards()} callback={handler} />
    </div>
  )
}

const HandControls: React.FunctionComponent<any> = ({callback, ...props}) => {
  return (
  <div className="floating">
    <button className="button" type="button" onClick={callback}>Play Hand</button>
  </div>)
}

export default HandContainer;