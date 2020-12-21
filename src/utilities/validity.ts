import Card from '../interfaces/Card';
import Hand from '../models/Hand';
import HandType from '../interfaces/HandType';

const handTypes = [
  HandType.Single,
  HandType.Pair,
  HandType.TwoPairs,
  HandType.ThreeOfAKind,
  HandType.FullHouse,
  HandType.Run,
]

export function checkValid(cards: Array<Card>, lastPlayed: Array<Card>){
  const lastPlayedType = getHandType(lastPlayed);
  if (lastPlayedType != null){
    const {handType, valid} = checkValidSpecific(cards, lastPlayedType);
    if (valid && handType != null){
      return isGreaterThan(cards, lastPlayed, handType);
    }
  }
  return false;
}

export function checkFirstMove(cards: Array<Card>){
  for (let handType of handTypes){
    if (checkValidSpecific(cards, handType).valid) return true;
  }
  return false;
}

export function getHandType(lastPlayed: Array<Card>) {
  for (let type of handTypes){
    const {handType, valid} = checkValidSpecific(lastPlayed, type);
    console.log("handType, valid", handType, valid);
    if (valid && handType != null) return handType;
  }
  return null;
}

export function checkValidSpecific(cards: Array<Card>, handType: HandType){
  switch(handType){
    case HandType.Single: {
      if (checkSingle(cards)){
        return {
          handType: HandType.Single,
          valid: true
        }
      }
      else break;
    }
    default: {
      break;
    }
  }
  return {valid: false};
}

export function isGreaterThan(cards: Array<Card>, last: Array<Card>, handType: HandType){
  console.log("Comparing:", cards, last, handType);
  switch(handType) {
    case HandType.Single: {
      return compareSingle(cards, last);
    }
    default: {
      return false;
    }
  }
}

export function compareSingle(hand: Array<Card>, last: Array<Card>){
  return hand[0].value > last[0].value;
}

export function checkSingle(cards: Array<Card>){
  return cards.length === 1;
}