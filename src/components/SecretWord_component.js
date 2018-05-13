import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { showGuess } from '../lib/game'

class SecretWord extends PureComponent {

  render() {

    const { word, guess, display } = this.props
    let holder
    if (display === false)
      holder = `Press "New game" to get started!`
    else
      holder = showGuess(word, guess)
    return (
      <h3 className="wordToGuess">{ holder }</h3>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    word: reduxState.secretWord,
    guess: reduxState.guessLetter,
    display: reduxState.wordDisplay
  }
}

export default connect(mapStateToProps)(SecretWord)
