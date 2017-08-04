import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'app/Root';
import { store } from 'app/Store';

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
