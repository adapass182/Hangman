import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class GuessArea extends PureComponent {

  render() {

    return (
      <form className="guess-area">
        <input type="text" placeholder="Guess a letter..." maxLength="1" minLength="1"/>
      </form>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    guess: reduxState.guessLetter
  }
}

export default connect(mapStateToProps)(GuessArea)
