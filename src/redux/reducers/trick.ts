export const UPDATE_CURRENT_TURN = "UPDATE_CURRENT_TURN";
export const UPDATE_PLAYERS = "UPDATE_PLAYERS";

export interface Action {
  type: string;
  payload: Payload;
}

export interface Payload {
  playerId?: String;
  playerTurnIndex?: number;
  players?: Array<String>;
}

const defaultState = {
  turn: -1,
  playersLeft: [],
  currentTurn: {
    playerTurnIndex: null,
    playerId: null
  }
}

function trickReducer(state = defaultState, action: Action){
  switch(action.type) {
    case UPDATE_CURRENT_TURN: {
      let {playerId, playerTurnIndex} = action.payload;
      if (playerId != null && playerTurnIndex != null){
        return {
          ...state,
          currentTurn: {
            playerId,
            playerTurnIndex
          }
        }
      }
      return state;
    }
    case UPDATE_PLAYERS: {
      let {players} = action.payload;
      if (players != null){
        return {
          ...state,
          players
        }
      }
      return state;
    }
    default: {
      return state;
    }
  }
}

export default trickReducer;