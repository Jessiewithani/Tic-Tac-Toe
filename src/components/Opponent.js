import React, { useEffect, useState } from 'react';
import Square from '../components/Square';
import '../Opponent.css';

function Opponent() {

  // const [player, setPlayer] = useState(null)

  // useEffect(() => {
  //   if (!player === null) {
  //     setPlayer(the square's value)
  //   }
  // })
  
  return(
    //we would need onclick functions for these two squares
    //should I do a useEffect for handling the onclick for these values??
    //we can try to add the props from the child to the parent with a callback function
    <div className="opponent-container">
      <Square value="X"  />
      <Square value="O"  />
    </div>
  )
}

export default Opponent;