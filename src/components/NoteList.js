import React, { Component } from 'react'

export default class NoteList extends Component {

  constructor(props){
    super(props)
    this.unsubscribe = props.store.subscribe(this.forceUpdate.bind(this))
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  handleNoteClick(e){
    e.preventDefault()
    
    this.props.store.dispatch({
      type: 'UPDATE_CURRENT_NOTE',
      payload: e.target.text
    })
  }

  render(){
    const notes = this.props.store.getState().notes

    return(
      <div className='col-md-4'>
        <h2>Note List</h2>
        <ul>
          { notes.map( (note, i) => <li key={i}><a href="#" onClick={this.handleNoteClick.bind(this)}>{ note.title }</a></li>)}
        </ul>
      </div>)
  }
}
