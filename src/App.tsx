import React from 'react';
import './App.scss';
import Game from './pages/Game';
import Player from './models/Player';

function App() {

  const players = [new Player("Harry"), new Player("William"), new Player("Meghan"), new Player("Kate")]

  return (
    <div className="App">
      <Game players={players} />
    </div>
  );
}

export default App;
