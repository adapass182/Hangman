import { NEW_GAME, MAKE_GUESS } from './types'

export const newGame = () => {
  return {
    type: NEW_GAME
  }
}

export const makeGuess = () => {
  return {
    type: MAKE_GUESS
    payload: 
  }
}
