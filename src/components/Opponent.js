import React from 'react';
import Square from '../components/Square';
import '../Opponent.css';

function Opponent() {
  return(
    //we would need onclick functions for these two squares
    //we can try to add the props from the child to the parent with a callback function
    <div className="opponent-container">
      <Square value="X"  />
      <Square value="O"  />
    </div>
  )
}

export default Opponent;