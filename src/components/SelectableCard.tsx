import React from 'react';
import Card from './Card';

const SelectableCard: React.FunctionComponent<any> = ({callback, ...props}) => {

  const handleClick = () => {
    callback(props.value, props.suit);
  }

  return (<Card callback={handleClick} {...props} />)
}

export default SelectableCard;