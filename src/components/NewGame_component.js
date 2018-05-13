import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class NewGameButton extends PureComponent {

  render() {

    const { display } = this.props
    let holder = ""
    if (!display)
      holder = `Let's go!`
    else
      holder = "Start again"


    return (
      <button onClick={this.props.onClick}>{ holder }</button>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    display: reduxState.wordDisplay
  }
}

export default connect(mapStateToProps)(NewGameButton)
