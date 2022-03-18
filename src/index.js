import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from '../src/redux/configStore'

//ket noi websocket voi signalr
import * as SignalR from '@aspnet/signalr';
import { DOMAIN } from './redux/actions/types/ListMoviesTypes';
import './i18n';

export let connection = new SignalR.HubConnectionBuilder().withUrl(`${DOMAIN}/DatVeHub`).configureLogging(SignalR.LogLevel.Information).build();
connection.start().then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}).catch(errors => console.log(errors))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();