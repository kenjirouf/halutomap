import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import Container from './Container';
import './index.scss'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Container />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorkerRegistration.register();
