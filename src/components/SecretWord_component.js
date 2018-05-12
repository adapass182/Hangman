import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export default class SecretWord extends PureComponent {
  state = {}

  render() {
    return (
      <h2 className="wordToGuess">_ _ _ _ _ _</h2>
    )
  }
}
