import { browserHistory } from 'react-router';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import { loadState } from './utilities/localStorage/LocalStorage';

// Combine all store reducers.
const storeReducers = combineReducers({
  routing: routerReducer
});

// Set up middleware (store enhancers). Note that we'll wrap enhancers with Redux DevTools (if available) for debugging purposes.
const composeEnhancers = IS_PRODUCTION ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeEnhancers = composeEnhancers(
  applyMiddleware(thunk)
);

// Retrieve state from localStorage (see LocalStorage.js)
const persistedState = loadState();

// Create our redux store.
const store = createStore(storeReducers, persistedState, storeEnhancers);

/*
* To persist state in localStorage (to handle browser refresh), subscribe to the store using one of the following methods:
*
* // saves the entire state tree
* store.subscribe(throttle(() => {
*   saveState(store.getState());
* }, 1000));
*
* // saves only a portion (e.g. auth, users, etc) of the state tree
* store.subscribe(throttle(() => {
*   saveState({
*     auth: store.getState().auth,
*     users: store.getState().users
*   });
* }, 1000));
*
* You will also need to import lodash/throttle, as well as saveState from LocalStorage as it's used above:
*
* import throttle from 'lodash/throttle';
* import { loadState, saveState } from './LocalStorage';
*/

// enable synching state with history (to be passed to router)
const history = syncHistoryWithStore(browserHistory, store);

export { store, history };
