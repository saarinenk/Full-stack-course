import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import App from './App';
import anecdoteReducer from './reducers/anecdoteReducer';
import notificationReduces from './reducers/notificationReducer';
import filterReducer from './reducers/filterReducer';
import { Provider } from 'react-redux';

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notifications: notificationReduces,
  filter: filterReducer
});

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

render();
store.subscribe(render);
