import React from 'react';
import './App.scss';
import Game from './pages/Game';

function App() {

  const players = ["Harry", "William", "Meghan", "Kate"]

  return (
    <div className="App">
      <Game players={players} />
    </div>
  );
}

export default App;
