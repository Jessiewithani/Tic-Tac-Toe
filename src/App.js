import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import Opponent from './components/Opponent';
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div className="game-container">
        <Switch>
          <Route path="/board">
            <Board />
          </Route>
          <Route path="/">
            <Opponent />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
