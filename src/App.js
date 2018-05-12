import React, { Component } from 'react';
import './App.css';

import GuessArea from './components/GuessArea_component'
import SecretWord from './components/SecretWord_component'
import NewGame from './components/NewGame_component'
import WrongCount from './components/WrongCount_component'

import { randomWord } from './lib/game'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="app-title">Hangman</h1>
        <GuessArea />
        <SecretWord secretword={randomWord()}/>
        <WrongCount />
        <NewGame />
      </div>
    );
  }
}

export default App;
