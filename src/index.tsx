import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SWRConfig } from 'swr';
import axios from 'axios';

ReactDOM.render(
  <SWRConfig
    value={{
      fetcher: (resource, init) => axios({
        method: 'GET',
        url: `${resource}`,
        headers: {
          Accept: 'application/json',
        },
      })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
        })
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SWRConfig>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
