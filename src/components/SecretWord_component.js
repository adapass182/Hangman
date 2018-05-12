import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { showGuess } from '../lib/game'

const placeHolder = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

class SecretWord extends PureComponent {

  render() {

    const { secretword } = this.props

    return (
      <h2 className="wordToGuess">{showGuess(secretword, placeHolder)}</h2>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    secretword: reduxState.secretWord

  }
}

export default connect(mapStateToProps)(SecretWord)
