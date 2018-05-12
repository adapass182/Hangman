import { randomWord } from '../lib/game'

export default (state = randomWord(), { type, payload } = {}) => {
  console.log(`Hi! I'm the wordToGuess reducer!`)
  return state
}
