import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export default class SecretWord extends PureComponent {
  state = {}

  render() {

    const { secretword } = this.props

    return (
      <h2 className="wordToGuess">{secretword}</h2>
    )
  }
}
