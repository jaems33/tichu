import React from 'react'
import Card from './Card';
import ICard from '../interfaces/Card'

interface ICards {
  cards: Array<ICard>;
}

const Cards: React.FunctionComponent<ICards> = ({cards}) => {
  return (
    <div className="hand">
      {cards.map((card: ICard) => <Card key={card.id} {...card} />)}
    </div>
  )
}

export default Cards;