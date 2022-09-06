import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user';
import './css/index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

