//See comments on line 20 of '../actions/game' for further info.
//Could possibly remove from state - '../lib/game' funtcions make it obsolete?
export default (state = false, { type, payload } = {}) => {
  switch (type) {
  case 'NEW_GAME':
    return true
  default:
    return state
  }
}
