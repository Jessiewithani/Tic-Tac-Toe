import React, { useEffect, useState } from 'react';
import Square from '../components/Square';
import '../Opponent.css';

function Opponent() {

  let [player, setPlayer] = useState(null)
  
  
  
  //now we need a useEffect method for handling the click
  const handleClick = (event) => {
    // console.log('event',event.target.value)
    player = event.target.value

    setPlayer(player)

    console.log('player',player)
    
  }
  
  return(
    //we would need onclick functions for these two squares
    //should I do a useEffect for handling the onclick for these values??
    //we can try to add the props from the child to the parent with a callback function
    <div className="opponent-container">
      <h3>Choose a player!</h3>
      <div className="choose-player-container">
        <div className="players">
          <button className="x" disabled={false} name="player" value="X" onClick={(event) => handleClick(event)}>X</button>
          <button className="o" disabled={false} name="player" value="O" onClick={(event) => handleClick(event)}>O</button>
        </div>
      </div>
    </div>
  )
}

export default Opponent;