import React, { Component } from 'react'

import NoteList from './NoteList'
import NoteCreate from './NoteCreate'

export default class App extends Component {
  render(){
    return(
      <div className='container'>
        App
        < NoteList store={ this.props.store }/>
        < NoteCreate store={ this.props.store }/>
      </div>)
  }
}
