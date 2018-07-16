import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import Dashboard from './components/Dashboard';


ReactDOM.render(<Dashboard />, document.getElementById('root'));
registerServiceWorker();
