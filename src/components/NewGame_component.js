import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Button from './Button_component'

export default class NewGame extends PureComponent {
  state = {}

  render() {
    return (
      <form className="new-game">
        <Button name="New game" />
      </form>
    )
  }
}
