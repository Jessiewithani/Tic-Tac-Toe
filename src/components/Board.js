import { useState } from 'react';
import Square from '../components/Square';
import '../Board.css';

function Board() {

  const [ board, setBoard ] = useState(Array(9).fill(null));

  const square = board.map((el, index) => 
    <Square 
    key={index} 
    value={el}  />
  );

  return (


    <div className="board">
      <h3 className="next-player-message">Next player!</h3>
      {square}
    </div>
  )
}

export default Board;