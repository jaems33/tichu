import React, {useRef} from 'react';
import ICard from '../interfaces/Card';
import {valueToString, abbreviateSuit} from '../utilities/string'

interface IClickable {
  callback?: Function;
}

interface Customizable {
  classNames?: String;
}

const Card: React.FunctionComponent<ICard & IClickable & Customizable> = ({value, suit, callback, classNames}) => {

  const divRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (callback){
      if (divRef !== null && divRef.current !== null){
        divRef.current.classList.toggle('selected');
      }
      callback();
    }
  }

  const parsedSuit = abbreviateSuit(suit);
  const parsedValue = valueToString(value);

  return (
  <div ref={divRef} className={`card ${classNames ? classNames : ''}`} onClick={(event: React.MouseEvent) => handleClick(event)} >
    <div className="card__info">
      <span className="card__info__content">{parsedValue}</span>
      <span className="card__info__content">{parsedSuit}</span>
    </div>
    <div className="card__info">
      <span className="card__info__content">{parsedSuit}</span>
      <span className="card__info__content">{parsedValue}</span>
    </div>
  </div>)
}

export default Card;