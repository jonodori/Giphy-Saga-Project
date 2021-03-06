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

const gifs = (state = [], action) => {
    switch (action.type) {
        case 'SET_GIFS': 
            return action.payload
        default: 
        return state
    }
}

function* fetchGifs(action){
console.log('made it to fetchGifs', action)
const res = yield axios.get(`/api/search/${action.payload}`)
    // console.log(action.payload);
    // console.log(res.data);
 yield put({   
    type: 'SET_GIFS',
    payload: res.data.data
    })
    console.log(action.payload);
    console.log(res.data);
}


function* watcherSaga(){
// yield takeEvery('ADD_IMAGE', addImage)

yield takeEvery('FETCH_GIF', fetchGifs)
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({ 
    addImage,
    gifs,
    }),

    applyMiddleware(sagaMiddleware, logger)
  );

sagaMiddleware.run(watcherSaga);
  

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
