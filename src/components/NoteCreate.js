import React, { Component } from 'react'

export default class NoteCreate extends Component {

  constructor(){
    super()
    this.state = {title: ''}
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_NOTE',
      payload: {
        title: this.state.title,
        content: ''
      }
    })
    this.setState({title: ''})
  }

  handleChange(event){
    this.setState({
      title: event.target.value
    })
  }

  render(){
    return(
      <div className='col-md-4'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.handleChange.bind(this)} value={this.state.title}/>
          <input type="submit" />
        </form>
      </div>)
  }
}
