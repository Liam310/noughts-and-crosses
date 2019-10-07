import React, { Component } from 'react';
import './Gameplay.css';

class Gameplay extends Component {
  state = {
    stones: ['', '', '', '', '', '', '', '', ''],
    turn: 'X',
    playerx: 'player1',
    win: false
  };
  render() {
    return (
      <div className="game-board">
        {this.state.stones.map((square, index) => {
          return (
            <div
              key={index}
              onClick={() => this.placeStone(index)}
              className="box"
            >
              {square}
            </div>
          );
          GameEnd;
          GameEnd;
        })}
      </div>
    );
  }

  placeStone = index => {
    this.setState(currentState => {
      const { stones, turn } = currentState;
      if (stones[index] === '') {
        const newStones = [...stones];
        newStones[index] = turn;
        return this.alternateTurn(newStones, turn);
      }
    });
  };

  alternateTurn = (stones, turn) => {
    return { stones, turn: turn === 'X' ? 'O' : 'X' };
  };

  checkForWin = stones => {
    let win = false;
    const possibleWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ];
    possibleWins.forEach(arr => {
      if (stones[arr[0]] === stones[arr[1]] && stones[arr[1]] === stones[arr[2]])
        if (stones[arr[0]] !== '') win = true;
    });
    return win;
  };

  componentDidUpdate(prevProps, prevState) {
    const { updateScore } = this.props;
    const { turn, stones } = this.state;
    if (prevState.turn !== turn && this.checkForWin(stones)) {
      updateScore(prevState.turn, prevState.playerx);
    }
  }
}

export default Gameplay;
