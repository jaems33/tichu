const NEXT_TURN = "NEXT_TURN";

export interface Action {
  type: string;
  payload: Payload;
}

export interface Payload {
  
}

const defaultState = {
  turn: 0
}

function trickReducer(state = defaultState, action: Action){
  switch(action.type) {
    case NEXT_TURN: {
      return {
        turn: state.turn + 1
      }
    }
    default: {
      return state;
    }
  }
}

export default trickReducer;