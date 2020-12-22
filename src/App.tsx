import React from 'react';
import './App.scss';
import Game from './pages/Game';
import Player from './models/Player';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  const players = [new Player("Harry"), new Player("William"), new Player("Meghan"), new Player("Kate")]

  return (
    <div className="App">
      <Provider store={store}>
        <Game players={players} />
      </Provider>
    </div>
  );
}

export default App;
