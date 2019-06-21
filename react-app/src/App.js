import React, { Component } from 'react';
import './App.css';
import Sampledata from './fire/Sampledata';
import firebase from 'firebase';

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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Appコンポーネント
class App extends Component {

  render() {
    return (
      <div>
        <h1>Fire</h1>
        <h2>Sample data</h2>
        <Sampledata />
      </div>
    )
  }
}

export default App;