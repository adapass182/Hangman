import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="app-title">Hangman</h1>
        <form className="guess-area">
          <input type="text" name="Guess a letter..."/><input type="submit" value="Submit"/><h2 className="wrong-guess-count">Wrong guesses: 0</h2>
        </form>
        <h2 className="wordToGuess">_ _ _ _ _ _</h2>
        <form className="new-game">
          <input type="submit" value="New game" />
        </form>
      </div>
    );
  }
}

export default App;
