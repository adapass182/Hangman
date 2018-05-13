import { NEW_GAME, MAKE_GUESS, WORD_DISPLAY } from './types'
import { randomWord } from '../lib/game'


//Not dispatched on page load, only on NewGameButton onSubmit event:
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

//Implemented wordDisplay state to use boolean value to control some of the text displays that are not needed at all times
//e.g: SecretWord_componenet line 11:5
//I think I could have used lib/game functions instead, I've just used a few
//e.g: AlreadyGuessed_component line 14:5
export const wordDisplay = () => {
  return {
    type: WORD_DISPLAY,
  }
}
