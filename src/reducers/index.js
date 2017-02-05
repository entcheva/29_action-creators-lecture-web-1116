import {combineReducers} from 'redux'

import notesReducer from './notesReducer'
import currentNoteReducer from './currentNoteReducer'

export default combineReducers({
  notes: notesReducer,
  currentNote: currentNoteReducer
})
