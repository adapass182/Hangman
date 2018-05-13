import React, { PureComponent } from 'react'

export default class GuessArea extends PureComponent {

  render() {

    return (
      <form className="guess-area" onSubmit={this.props.onSubmit}>
        <input type="text" placeholder="Guess a letter..." maxLength="1" minLength="1" onChange={this.props.onChange} />
      </form>
    )
  }
}
