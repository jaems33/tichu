import React, {useState} from 'react';
import Card from './Card';

const SelectableCard: React.FunctionComponent<any> = ({callback, ...props}) => {

  const handleClick = () => {
    callback();
  }

  return (<Card classNames='card--selectable' callback={handleClick} {...props} />)
}

export default SelectableCard;