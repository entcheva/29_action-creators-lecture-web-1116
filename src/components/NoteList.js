import React from 'react'

import { connect } from 'react-redux'

class NoteList extends React.Component {

  // componentDidMount(){
  //   this.props.store.subscribe( this.forceUpdate.bind(this) )
  // }

  render (){
    // const store = this.props.store
    // console.log(store.getState())
    // const notes = store.getState().notes
    const notes = this.props.notes
    return (
      <div>
        <h2>Note List</h2>
        <ul>
          { notes.map((note, i) => <li key={i}>{note}</li> ) }
        </ul>
      </div>)
  }
}

function mapStateToProps (state){
  return {
    notes: state.notes
  }
}

const wrappedComponentCreator = connect( mapStateToProps )
export default wrappedComponentCreator( NoteList ) // returns a component

// 
// function connect(mapStateToProps){
//   return function( component ){
//     return class WrappedComponent extends React.Component {
//
//       // componentDidMount(){
//       //   store.subscribe( this.forceUpdate.bind(this) )
//       // }
//
//       render(){
//         let state = store.getState()
//         let props = mapStateToProps(state)
//         React.createElement(component, props)
//       }
//     }
//
//
//   }
// }
