import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

import { createStore } from 'redux';
import notesReducer from './reducers/notesReducer'

const store = createStore(notesReducer);



ReactDOM.render(<App store={store}/>, document.getElementById('container'));
