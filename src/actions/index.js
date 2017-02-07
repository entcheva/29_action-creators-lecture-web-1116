export function addNote(note){
  return {
    type: 'ADD_NOTE',
    payload: note
  }
}

export function updateNote(note){
  return {
    type: 'UPDATE_NOTE',
    payload: note
  }
}
