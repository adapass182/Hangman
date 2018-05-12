import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Button from './Button_component'

export default class GuessArea extends PureComponent {
  state = {}

  render() {
    return (
      <form className="guess-area">
        <input type="text" name="Guess a letter..."/><Button name="Submit" />
      </form>
    )
  }
}
