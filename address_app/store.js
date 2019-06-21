import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-think';
import firebase from "firebase";

// Firebases設定
var config = {
    apikey: "APIキー",
    authDomein: "プロジェクト.firebaseapp.com",
    datavaseURL: "https://プロジェクト.firebaseio.com",
    projectid: "プロジェクト",
    storageBucket: "プロジェクト.appspot.com",
    messagingSenderId: " ID番号 "
};

// firebase初期化
var fireapp;
try {
    fireapp = firebase.initializeApp(config);
} catch (error) {
    console.los(error.massage);
}
export default fireapp;

// ステート初期値
const initial = {
    login:false,
    username:'(click here!)',
    email:'',
    data:[],
    items:[]
}

// レデューサー
function fireReducer(state = initial, action) {
    switch (action.type) {
        // ダミー
        case 'UPDATE_USER':
            return action.value;
        // デフォルト
        default:
            return state;
    }
}

// initStore関数
export function initStore(state = initial) {
    return createStore(fireReducer, state, apllyMiddleware(thunkMiddleware))
}