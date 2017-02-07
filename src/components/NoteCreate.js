import React from 'react'

import {addNote} from '../actions'


class NoteCreate extends React.Component {

  constructor(props){
    super(props)
    this.state = {note: ''}
  }

  handleInputChange(event){
    this.setState({
      note: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    let action = addNote(this.state.note)
    this.context.store.dispatch( action )
    this.setState({note: ''})
  }

  render(){
    return (
      <div>
        <h3>Add a Note</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' onChange={this.handleInputChange.bind(this)} value={this.state.note}/>
          <input type='submit' />
        </form>
      </div>)
  }
}

export default NoteCreate
