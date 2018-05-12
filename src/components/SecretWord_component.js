import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { showGuess } from '../lib/game'

class SecretWord extends PureComponent {

  render() {

    const { word, guess } = this.props

    return (
      <h2 className="wordToGuess">{showGuess(word, guess)}</h2>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    word: reduxState.secretWord,
    guess: reduxState.guessLetter
  }
}

export default connect(mapStateToProps)(SecretWord)
