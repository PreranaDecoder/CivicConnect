import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  >
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
