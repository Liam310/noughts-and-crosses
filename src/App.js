import './App.css';
import React, { Component } from 'react';
import Gameplay from './components/Gameplay';
import GameEnd from './components/GameEnd';

class App extends Component {
  state = {
    scores: { player1: 0, player2: 0 }
  };
  render() {
    return (
      <div>
        <Gameplay updateScore={this.updateScore} />
        <GameEnd />
      </div>
    );
  }

  updateScore = (turn, playerx) => {
    this.setState(({ scores }) => {
      const newScores = { ...scores };
      if (turn === 'X') {
        newScores[playerx] += 1;
      } else {
        playerx === 'player1' ? newScores.player2++ : newScores.player1++;
      }
      console.log(newScores);
      return { scores: newScores };
    });
  };
}

export default App;
