import React from 'react';
import './App.scss';
import GameController from './pages/GameController';
import Player from './models/Player';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  const players = [new Player("Harry"), new Player("William"), new Player("Meghan"), new Player("Kate")]

  return (
    <div className="App">
      <Provider store={store}>
        <GameController players={players} />
      </Provider>
    </div>
  );
}

export default App;
