export default (state = [], { type, payload } = {}) => {
  console.log(`Hi! I'm the letters guessed reducer!`)
  switch (type) {
  case 'MAKE_GUESS':
    return state + payload
  default:
    return state
  }
}
