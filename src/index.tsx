import React from 'react';
import './config/ReactotronConfig';
import ReactDOM from 'react-dom';

import App from './App';
import TestMoveable from './pages/Tests/TestMoveable';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <TestMoveable /> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
