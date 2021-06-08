import { useState } from 'react';
import Square from '../components/Square';
import '../Board.css';

function Board() {

  const [ board, setBoard ] = useState(Array(9).fill(null));
  const [ player, setPlayer ] = useState('X');

  const handleClick = (index) => {
    console.log('i', index)
    let newBoard = board;

    if (board[index] === null) {
      newBoard[index] = player;

      let newPlayer = player === 'X' ? 'O' : 'X';

      setBoard(newBoard);
      setPlayer(newPlayer);
    }

  }

  const square = board.map((el, index) => 
    <Square 
    key={index} 
    value={el}  
    onClick={() => handleClick(index)}/>
  );

  return (


    <div className="board">
      <h3 className="next-player-message">Next player!</h3>
      {square}
    </div>
  )
}

export default Board;