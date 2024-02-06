import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM without '/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root') // You need to specify the target element for rendering
);
