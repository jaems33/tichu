import React, {useState} from 'react';
import PlayerHand from '../models/PlayerHand';
import SelectableCards from './SelectableCards';
import Card from '../interfaces/Card';

interface IHandContainer {
  playerHand: PlayerHand;
}

const HandContainer: React.FunctionComponent<IHandContainer> = ({playerHand}) => {
  
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

  console.log("Selected Cards", selected);

  const playerName = playerHand.getPlayer().getName();

  return (
    <div>
      <h3>{playerName}</h3>
      <SelectableCards cards={playerHand.getHand()} callback={handler} />
    </div>
  )
}

export default HandContainer;