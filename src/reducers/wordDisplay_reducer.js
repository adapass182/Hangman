export default (state = false, { type, payload } = {}) => {
  switch (type) {
  case 'NEW_GAME':
    return true
  default:
    return state
  }
}
