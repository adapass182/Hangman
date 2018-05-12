import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { wrongGuessCount } from '../lib/game'

class WrongCount extends PureComponent {

  render() {

    const { word, guess } = this.props

    return (
      <h2 className="wrong-guess-count">Wrong guesses: {wrongGuessCount(word, guess)}</h2>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    word: reduxState.secretWord,
    guess: reduxState.guessLetter
  }
}

export default connect(mapStateToProps)(WrongCount)
