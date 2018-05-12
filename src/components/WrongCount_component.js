import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export default class WrongCount extends PureComponent {
  state = {}

  render() {
    return (
      <h2 className="wrong-guess-count">Wrong guesses: 0</h2>
    )
  }
}
