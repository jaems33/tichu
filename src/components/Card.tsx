import React from 'react';
import ICard from '../interfaces/Card';

export interface IClickable {
  callback?: Function;
}

const Card: React.FunctionComponent<ICard & IClickable> = ({value, suit, callback}) => {
  
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (callback){
      callback();
    }
  }

  return (
  <div className="card" onClick={(event: React.MouseEvent) => handleClick(event)}>
    <div className="card__info">
      <span className="card__info__content">{value}</span>
      <span className="card__info__content">{suit}</span>
    </div>
    <div className="card__info">
      <span className="card__info__content">{suit}</span>
      <span className="card__info__content">{value}</span>
    </div>
  </div>)
}

export default Card;