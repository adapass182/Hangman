import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export default class Button extends PureComponent {
  state = {}

  render() {

    const { name, onClick } = this.props

    return (
      <input type="submit" value={name} onClick={onClick} />
    )
  }
}
