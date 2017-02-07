import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

import { createStore } from 'redux';
import notesReducer from './reducers/notesReducer'

import {addNote} from './actions/index'

const store = createStore(notesReducer);

// {
//   notes: [],
//   users: [],
//   currentNote: ''
// }

store.dispatch(addNote('React'))
store.dispatch(addNote('Redux'))
store.dispatch(addNote('Dan Abramov, our good friend'))



ReactDOM.render(<App store={store}/>, document.getElementById('container'));
