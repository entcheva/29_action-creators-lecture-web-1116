import React, { Component } from 'react'

export default class NoteEdit extends Component {

  componentDidMount(){
    this.unsubscribe = this.props.store.subscribe(this.forceUpdate.bind(this))
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  updateNote(note){
    this.props.store.dispatch({
      type: 'UPDATE_NOTE',
      payload: note
    })
  }

  render(){
    const state = this.props.store.getState()
    const note = state.notes.find(note => note.title === state.currentNote )

    if (!note) {
      return <div></div>
    }
    console.log(note.content)
    return(
      <div className='col-md-8'>
        <h2>{ note.title }</h2>
        <textarea className="full_width" onChange={(e) => this.updateNote({title: note.title, content: e.target.value})} value={ note.content } />
      </div>)
  }
}
