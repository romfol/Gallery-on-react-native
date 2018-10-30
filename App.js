import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Screens from './src/screens';
import middleware from './middleware';

const store = createStore(reducers, applyMiddleware(ReduxThunk, middleware));

const App = () => {
  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  );
};

export default App;
