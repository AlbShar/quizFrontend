import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css';
import { App } from './app';

const root = ReactDOM.createRoot(
  document?.getElementById('root') ?? document.createElement('div'),
);
root.render(<App />);
