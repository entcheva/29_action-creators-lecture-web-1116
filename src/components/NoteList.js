import React from 'react'

export default class NoteList extends React.Component {

  componentDidMount(){
    this.props.store.subscribe( this.forceUpdate.bind(this) )
  }

  render (){
    const store = this.props.store
    console.log(store)

    const notes = store.getState()

    return (
      <div>
        <h2>Note List</h2>
        <ul>
          { notes.map((note, i) => <li key={i}>{note}</li> ) }
        </ul>
      </div>)
  }

}
