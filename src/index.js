import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from "react-redux"
import {applyMiddleware, createStore} from "redux"
import islandReducer from "./reducers/islandReducer"
import thunk from 'redux-thunk';

const store = createStore(islandReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
