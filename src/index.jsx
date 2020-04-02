import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import '../assets/stylesheets/application.scss';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger'
import reduxPromise from 'redux-promise'
import citiesReducer from './reducers/cities_reducer'
import activeCityReducer from './reducers/active_city_reducer'
import App from './components/app'

const reducers = combineReducers({
  cities: citiesReducer,
  activeCity: activeCityReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise))

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers, {}, middlewares)}>
      <App />
    </Provider>, root);
}
