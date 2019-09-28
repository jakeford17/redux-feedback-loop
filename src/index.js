import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

const feedbackReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FEELINGS': 
        state = [...state, action.payload]
        return state
        case 'SET_UNDERSTANDING': 
        state = [...state, action.payload]
        return state
        case 'SET_SUPPORTED': 
        state = [...state, action.payload]
        return state
        case 'SET_COMMENTS': 
        state = [...state, action.payload]
        return state
        case 'CLEAR': 
        state = []
        return state
        default: return state
    }
}

const reduxStore = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
