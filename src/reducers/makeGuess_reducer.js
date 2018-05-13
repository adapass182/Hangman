export default (state = [], { type, payload } = {}) => {
  switch (type) {
  case 'MAKE_GUESS':
    return state.concat(payload)
  default:
    return state = []
  }
}
