// Will reset guessLetter state to an empty array as default action.
// When type: MAKE_GUESS is passed, concatenates user input from makeGuess() in app.js to guessLetter array in store.
export default (state = [], { type, payload } = {}) => {
  switch (type) {
  case 'MAKE_GUESS':
    return state.concat(payload)
  default:
    return state = []
  }
}
