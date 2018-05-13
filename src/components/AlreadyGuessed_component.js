import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { gameFinished } from '../lib/game'

class AlreadyGuessed extends PureComponent {


  render() {
    const { guess, word } = this.props
    let holder = ""
    if (guess.length <= 0)
      holder = ""
    else if (gameFinished(word, guess))
      holder = ""
    else
      holder = "Guessed: " + guess
    return (
      <h4 className="already-guessed">{ holder }</h4>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    word: reduxState.secretWord,
    guess: reduxState.guessLetter
  }
}


export default connect(mapStateToProps)(AlreadyGuessed)
