import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { wrongGuessCount } from '../lib/game'

class WrongCount extends PureComponent {


  render() {
    const { word, guess } = this.props
    let holder = ""
    if (wrongGuessCount(word, guess) < 6 && wrongGuessCount(word, guess) > 0)
      holder = "Wrong guesses: " + wrongGuessCount(word, guess)
    else if (wrongGuessCount(word, guess) >= 6)
      holder = "You lose!"
    return (
      <h2 className="wrong-guess-count">{ holder }</h2>
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
