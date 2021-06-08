import { useState } from 'react';
import Square from '../components/Square';
import '../Board.css';

function Board() {

  const [ board, setBoard ] = useState(Array(9).fill(null));
  const [ player, setPlayer ] = useState('X');
  const [ winner, setWinner ] = useState(null);

  const checkWinner = () => {

    let winningCombos = [
      [0,1,2],
      [4,5,6],
      [7,8,9],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for (var i = 0; i < winningCombos.length; i++) {
      const[a,b,c] = winningCombos[i];

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(player)
        console.log('player', player)
        break;
      }
    }
  }

  const handleClick = (index) => {
    console.log('i', index)
    let newBoard = board;

    if (board[index] === null && !winner) {
      newBoard[index] = player;

      let newPlayer = player === 'X' ? 'O' : 'X';

      setBoard(newBoard);
      setPlayer(newPlayer);

      checkWinner();
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
      <h3 className="next-player-message">{!winner ? `${player}'s turn!` : `${winner} won!`}</h3>
      {square}
    </div>
  )
}

export default Board;