export default currentNoteReducer(state="", action){
  switch (action.type) {
    case 'UPDATE_CURRENT_NOTE':
      return action.payload
    default:
      return state
  }
}
