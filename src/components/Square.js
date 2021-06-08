import React from 'react';
import '../Square.css';

function Square({value, onClick}) {
  return (
    <div className="square" onClick={onClick}>
      <h3 className="p-letter">{value}</h3>
    </div>
  )
}

export default Square;