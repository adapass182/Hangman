import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class SecretWord extends PureComponent {
  state = {}

  render() {

    const { secretword } = this.props

    return (
      <h2 className="wordToGuess">{secretword}</h2>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    secretword: reduxState.word
  }
}

export default connect(mapStateToProps)(SecretWord)
