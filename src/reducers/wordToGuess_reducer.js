import { randomWord } from '../lib/game'

export default (state = randomWord(), { type, payload } = {}) => {
  console.log(`I'm logging the state yo!` + state)
  return state
}
