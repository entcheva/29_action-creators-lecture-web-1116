import {combineReducers} from 'redux'

import notesReducer from './notesReducer'
import currentNoteReducer from './currentNoteReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  notes: notesReducer,
  users: usersReducer,
  currentNote: currentNoteReducer
})

export default rootReducer
