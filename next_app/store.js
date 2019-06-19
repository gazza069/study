import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// ステート初期値
const initial = {
    message:'START',
    count: 0
}

// レデューサー
function counterReducer (state = initial, action) {
    switch (action.type)
}