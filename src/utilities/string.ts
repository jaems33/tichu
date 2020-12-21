import * as Constants from './constants';

export function valueToString(value: number){
  if (value >= Constants.MIN_VALUE && value < Constants.JACK_VALUE) return value.toString();
  switch(value){
    case Constants.MAX_VALUE: {
      return 'A';
    }
    case Constants.KING_VALUE: {
      return 'K';
    }
    case Constants.QUEEN_VALUE: {
      return 'Q';
    }
    case Constants.JACK_VALUE: {
      return 'J';
    }
    default: {
      return '';
    }
  }
}

export function abbreviateSuit(suit: string){
  return suit.slice(0, 1);
}