import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ConfigWrapper from './ConfigWrapper';

ReactDOM.render(
  <React.StrictMode>
    <ConfigWrapper>
      <App />
    </ConfigWrapper>

  </React.StrictMode>,
  document.getElementById('root')
);
