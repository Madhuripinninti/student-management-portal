// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StudentProvider } from './context/StudentContext';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StudentProvider>
    <App />
  </StudentProvider>
);
