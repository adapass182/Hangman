import { NEW_GAME, MAKE_GUESS, WORD_DISPLAY } from './types'
import { randomWord } from '../lib/game'

export const newGame = () => {
  return {
    type: NEW_GAME,
    payload: randomWord()
  }
}

export const makeGuess = (guessedLetter) => {
  return {
    type: MAKE_GUESS,
    payload: guessedLetter
  }
}

export const wordDisplay = () => {
  return {
    type: WORD_DISPLAY,
  }
}
