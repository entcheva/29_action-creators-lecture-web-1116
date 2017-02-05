export default function(state=[], action){
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload]
    case 'UPDATE_NOTE':
      return state.map( note => {
        if (note.title === action.payload.title ) {
          return action.payload
        }
        return note
      })
    default:
      return state
  }

}
