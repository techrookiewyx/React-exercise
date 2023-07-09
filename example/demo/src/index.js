import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'
import App from './App';
import './static/iconfont/iconfont.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router>
      <App/>
    </Router>
    </div>
);

