import React, { Component } from 'react'

import NoteList from './NoteList'
import NoteCreate from './NoteCreate'
import NoteEdit from './NoteEdit'

export default class App extends Component {
  render(){
    return(
      <div className='container'>
        <div className='row'>
          < NoteList store={this.props.store}/>
          < NoteEdit store={this.props.store}/>
        </div>
        <div className='row'>
          < NoteCreate store={this.props.store}/>
        </div>
      </div>)
  }
}
