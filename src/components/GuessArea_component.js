import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Button from './Button_component'

class GuessArea extends PureComponent {

  render() {

    const { guess } = this.props

    return (
      <form className="guess-area">
        <input type="text" placeholder="Guess a letter..." maxlength="1"/>
      </form>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    guess: reduxState.guessLetter
  }
}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(GuessArea)
