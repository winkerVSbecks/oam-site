import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/app';
import configureStore from './store/configure-store';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const store = configureStore();

React.render(
  <div>

    <Provider store={ store }>
      {() => <App />}
    </Provider>

  </div>,
  document.body
);
