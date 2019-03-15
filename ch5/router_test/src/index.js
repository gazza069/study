import React from 'react';
import ReactDOM from 'react-dom';
import HelloApp2 from './HelloApp2'
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(<HelloApp2 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
