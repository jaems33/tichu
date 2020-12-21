import React from 'react'
import Card from './Card';
import ICard from '../interfaces/Card';

interface ICards {
  cards: Array<ICard>;
}

interface ICallback {
  callback: Function;
}

const Cards: React.FunctionComponent<ICards & ICallback> = ({cards}) => {

  return (
    <div className="hand">
      {cards.map((card) => <Card key={card.id} {...card} />)}
    </div>
  )
}

export default Cards;