import React from 'react'
import ICard from '../interfaces/Card';
import SelectableCard from './SelectableCard';

interface ICards {
  cards: Array<ICard>;
}

interface ICallback {
  callback: Function;
}

const SelectableCards: React.FunctionComponent<ICards & ICallback> = ({cards, callback}) => {

  const onClickHandler = (card: ICard) => {
    callback(card);
  }

  return (
    <div className="hand">
      {cards.map((card: ICard) => <SelectableCard key={card.id} callback={() => onClickHandler(card)} {...card} />)}
    </div>
  )
}

export default SelectableCards;