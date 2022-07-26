import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { 
  applyMiddleware,
  compose,
  legacy_createStore as createStore
} from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';
import { logger } from './middlewares';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const composeAtl = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const componsedEnhancers = composeAtl(applyMiddleware(thunk, logger));
const store = createStore(rootReducer, componsedEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
