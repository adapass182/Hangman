import React, { PureComponent } from 'react'

export default class GuessArea extends PureComponent {

  render() {

    return (
      <form className="guess-area" onSubmit={this.props.onSubmit}>
        <//Used maxLength to control user input. NOTE: user can still submit no input! This will not
          //increment wrongGuessCount, but it will add "" to AlreadyGuessed_component.
          //NOTE: need to implement better input validation.
          input type="text" placeholder="Guess a letter..." maxLength="1" minLength="1" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
