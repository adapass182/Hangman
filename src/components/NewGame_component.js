import React, { PureComponent } from 'react'

export class NewGameButton extends PureComponent {

  render() {
    return (
      <button onClick={this.props.onClick}>New game</button>
    )
  }
}
