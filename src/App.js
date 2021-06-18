import './App.css';
import Board from './components/Board';
import Opponent from './components/Opponent';
import { Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';

function App() {

//we have to use the parent component as the intermediary
//if we want to pass props to one sibling to another
//we need a callback function

//1. pass the data from the child to the parent as an argument into a callback from the parent
//2. set this incoming parameter as a state on the parent component
//3. pass it as a prop to the other child
//4. the sibling can then use the data as a prop

  choosePlayer = (player) => {
    
  }

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
