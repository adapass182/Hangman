//Payload = randomWord(). Will return current state as default (initial state is "").
//Name is confusing - next project, make better use of good names!
export default (state = "", { type, payload } = {}) => {
  switch (type) {
  case 'NEW_GAME':
    return payload
  default:
    return state
  }
}
