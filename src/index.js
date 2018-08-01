import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
//import Dashboard from './components/Dashboard';
import DataTableExcel2 from './components/DataTableExcel2';


ReactDOM.render(<DataTableExcel2 />, document.getElementById('root'));
registerServiceWorker();
