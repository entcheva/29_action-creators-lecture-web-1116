import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

import { createStore } from 'redux';
import notesReducer from './reducers/notesReducer'
import rootReducer from './reducers'
import {addNote} from './actions/index'

import { Provider } from 'react-redux'

const store = createStore(rootReducer);
// const singleReducerStore = createStore(notesReducer)

// What is a store?
// A JS Object - holds onto the state of our application
// The state of our application is a single tree

// One JS object with many key value pairs
// "An app level state container"

// What can it do?

// getState() - it can return the current state of the application
// dispatch() - it can update the state based on an action
// subscribe() - it can hold on to a list of functions to execute every time the state changes

// How does it figure out how to change the state of our application??

// When we create the store, we give it a pure function
// this function takes in two arguments - the current state and an action
// it returns what the new state should look like


store.dispatch(addNote('React'))
store.dispatch(addNote('Redux'))
store.dispatch(addNote('Dan Abramov, our good friend'))



ReactDOM.render( <Provider store={store}>
  <App />
</Provider>, document.getElementById('container'));
