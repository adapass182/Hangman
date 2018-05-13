import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'

import GuessArea from './components/GuessArea_component'
import SecretWord from './components/SecretWord_component'
import NewGameButton from './components/NewGame_component'
import WrongCount from './components/WrongCount_component'
import AlreadyGuessed from './components/AlreadyGuessed_component'

import { newGame, makeGuess } from './actions/game'

class App extends Component {

  handleClick = () => {
    this.props.newGame()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.makeGuess(e.target[0].value)
    e.target[0].value = ""
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Hangman</h1>
        <GuessArea onSubmit={this.handleSubmit} onChange={this.handleChange}/>
        <SecretWord />
        <WrongCount />
        <AlreadyGuessed />
        <NewGameButton onClick={this.handleClick}/>
      </div>
    );
  }
}

export default connect(null, { newGame, makeGuess })(App)
