import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { newGame } from '../actions/game'


export class NewGameButton extends PureComponent {

  handleClick = () => {
    this.props.newGame()
  }

  render() {
    return (
      <button onClick={this.handleClick}>New game</button>
    )
  }
}

export default connect(null, { newGame })(NewGameButton)
