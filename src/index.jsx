import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import '../assets/stylesheets/application.scss';
import { createStore, combineReducers } from 'redux';

import citiesReducer from './reducers/cities_reducer'
import activeCityReducer from './reducers/active_city_reducer'
import App from './components/app'

const reducers = combineReducers({
  cities: citiesReducer,
  activeCity: activeCityReducer
});


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <App />
    </Provider>, root);
}
