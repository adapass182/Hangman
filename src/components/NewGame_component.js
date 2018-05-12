import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Button from './Button_component'

export default class NewGameButton extends PureComponent {

  render() {
    return (
      <Button name="New game" />
    )
  }
}
