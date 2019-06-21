import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyDnxOGx_4EyROacLvmPRZcYlU86LQ_LF2A",
authDomain: "react-next-a7834.firebaseapp.com",
databaseURL: "https://react-next-a7834.firebaseio.com",
projectId: "react-next-a7834",
storageBucket: "",
messagingSenderId: "951860818475",
appId: "1:951860818475:web:16a0dfbddf8c98e4"
};

var fireapp;
try {
    firebase.initializeApp(config);
} catch (error) {
    console.log(error.message);
}
export default fireapp;

// ステート初期値
const initial = {
}

// レデューサー（ダミー）
function fireReducer(state = initial, action) {
    switch (action.type) {
        // ダミー
        case 'TESTACTION':
            return state;
        // デフォルト
        default:
            return state;
    }
}

// initStore関数
export function initStore(state = initial) {
    return createStore(fireReducer, state, applyMiddleware(thunkMiddleware))
}

