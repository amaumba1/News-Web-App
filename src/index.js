import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import NavBar from './components/NavBar'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<NavBar />, document.getElementById('root'));
registerServiceWorker();
