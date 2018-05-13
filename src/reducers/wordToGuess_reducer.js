export default (state = "", { type, payload } = {}) => {
  switch (type) {
  case 'NEW_GAME':
    return payload
  default:
    return state
  }
}
