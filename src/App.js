//React components:
import React, { Component } from 'react';
import { connect } from 'react-redux'
//Styling:
import './App.css';
//Actions:
import { newGame, makeGuess } from './actions/game'
//Components:
import GuessArea from './components/GuessArea_component'
import SecretWord from './components/SecretWord_component'
import NewGameButton from './components/NewGame_component'
import WrongCount from './components/WrongCount_component'
import AlreadyGuessed from './components/AlreadyGuessed_component'

class App extends Component {

  //handleClick calls the newGame action:
  handleClick = () => {
    this.props.newGame()
  }

  //handleSubmit provides the value of the input field as payload to makeGuess action. NOTE: to get the value from the input field into the onSubmit eventhandler, you must specify the index of the input field in the object that is passed to onSubmit (see line 25:26).
  handleSubmit = (e) => {
    //Prevent default form submit action from refreshing page:
    e.preventDefault()
    //Pass value to makeGuess action:
    this.props.makeGuess(e.target[0].value)
    //Then reset input value:
    e.target[0].value = ""
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Hangman</h1>
        <//onSubmit and onChange props passed to form and input of GuessArea respectively:
          GuessArea onSubmit={this.handleSubmit} onChange={this.handleChange}/>
        <SecretWord />
        <WrongCount />
        <AlreadyGuessed />
        <NewGameButton onClick={this.handleClick}/>
      </div>
    )
  }
}

export default connect(null, { newGame, makeGuess })(App)
