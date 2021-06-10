import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import Opponent from './components/Opponent';

function App() {

  return (
    <div className="App">
      <div className="game-container">
        <Opponent />
        <Board />
      </div>
    </div>
  );
}

export default App;
