import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { showGuess, isWinner, gameFinished, wrongGuessLimit } from '../lib/game'

class SecretWord extends PureComponent {

  render() {

    const { word, guess, display } = this.props
    let holder
    if (display === false)
      holder = `Press "New game" to get started!`
    else if (gameFinished(word, guess))
      if (wrongGuessLimit(word, guess))
        holder = "You lost! The answer was: " + word
      else if (isWinner(word, guess))
        holder = "You guessed it! " + showGuess(word, guess)
      else
        return
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
