import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* addImage(action){
console.log('Inside index addImage', action)
const res = yield axios.get('/api/favorite')
yield put({
    type:'ADD_IMAGE',
    payload: res.data
    })
}

function* watcherSaga(){
yield takeEvery('ADD_IMAGE', addImage)
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({ 
    addImage,
    }),
    applyMiddleware(sagaMiddleware, logger)
  );

  

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
