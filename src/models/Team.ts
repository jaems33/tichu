import Player from './Player';

class Team {
  players: Array<Player>;
  points: number;
  constructor(){
    this.points = 0;
    this.players = [];
  }
  addPlayer(player: Player){
    this.players.push(player);
  }
}

export default Team;