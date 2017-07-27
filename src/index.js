import React from 'react';
import ReactDOM from 'react-dom';

// TODO call configureStore with the ability to enable persistence, etc
import Root from 'app/Root';
import { store, history } from 'app/Store';

ReactDOM.render(
  <Root
    store={store}
    history={history}
  />,
  document.getElementById('root')
);
