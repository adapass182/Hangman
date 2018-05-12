import React, { Component } from 'react';
import './App.css';

import GuessArea from './components/GuessArea_component'
import SecretWord from './components/SecretWord_component'
import NewGameButton from './components/NewGame_component'
import WrongCount from './components/WrongCount_component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="app-title">Hangman</h1>
        <GuessArea />
        <SecretWord />
        <WrongCount />
        <NewGameButton />
      </div>
    );
  }
}

export default App;
