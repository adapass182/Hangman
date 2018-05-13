import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class GuessArea extends PureComponent {

  render() {

    const { display } = this.props
    let holder = ""
    if (!display)
      holder = ""
    else
      holder = <div><input type="text" placeholder="Guess a letter..." maxLength="1" minLength="1" /><button type="submit">Submit</button></div>

    return (
      <form className="guess-area" onSubmit={this.props.onSubmit}>{holder}</form>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    display: reduxState.wordDisplay
  }
}


export default connect(mapStateToProps)(GuessArea)

// SEE LINE 13:72 --> Used maxLength to control user input. NOTE: user can still submit no input! This will not
//increment wrongGuessCount, but it will add "" to AlreadyGuessed_component.
//NOTE: need to implement better input validation.
//NOTE: Have used { display } state to only render text input once a new game has been initialised.
//This prevents the user from adding letters to the guess state before a word has been selected. 
