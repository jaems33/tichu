import {UPDATE_CURRENT_TURN, UPDATE_PLAYERS} from './reducers/trick'

export function updateCurrentTurn(playerId: String, playerTurnIndex: Number) {
  return {
    type: UPDATE_CURRENT_TURN,
    payload: {
      playerId,
      playerTurnIndex
    }
  }
}

export function updatePlayers(players: Array<string>) {
  return {
    type: UPDATE_PLAYERS,
    payload: {
      players,
    }
  }
}