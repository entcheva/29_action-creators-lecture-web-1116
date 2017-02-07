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
    console.log('Form submitted!')
    let action = addNote(this.state.note)
    this.props.store.dispatch( action )
    this.setState({note: ''})
  }

  render(){
    console.log(this.state)

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
