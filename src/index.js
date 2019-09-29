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

//This is the Redux Store, which uses feedbackReducer to take in certain pieces of feedback from each survery component...
//...The feedback components are stored in the state array of feedbackReducer...
//...The info goes from the state to the database with a POST request in Review.js...
//...This allows Admin to use a GET request and display the feedback on the DOM
//Used a switch statement to allow for only one reducer to be used
//Personally feel more comfortable having combineReducers in here even though it wasn't necessary

const reduxStore = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
