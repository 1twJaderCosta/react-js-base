import {
    createStore, combineReducers, applyMiddleware, compose,
  } from 'redux';

  import thunk from 'redux-thunk';
  
  import loading from './reducers/loading';
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export default () => {
    const store = createStore(
      combineReducers({
        loading,
      }),
      composeEnhancers(applyMiddleware(thunk)),
    );
  
    return store;
  };
  