import React from 'react';
import ReactDOM from 'react-dom/client';

import Container from './screens/Container';

import './styles/w3.css';
import './styles/tw.css';
import './styles/default.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="Main">
      <Container />
    </div>
  </React.StrictMode>,
)
