import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { showGuess } from '../lib/game'

const placeHolder = [];

class SecretWord extends PureComponent {

  render() {

    const { guess } = this.props

    return (
      <h2 className="wordToGuess">{showGuess(guess, placeHolder)}</h2>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    guess: reduxState.secretWord

  }
}

export default connect(mapStateToProps)(SecretWord)
