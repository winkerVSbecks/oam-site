import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app';
import configureStore from './store/configure-store';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const store = configureStore();

ReactDOM.render(
  <div>

    <Provider store={ store }>
      <App />
    </Provider>

    <DebugPanel top right bottom>
      <DevTools store={ store }
        monitor={ LogMonitor }
        visibleOnLoad= { false } />
    </DebugPanel>

  </div>,
  document.getElementById('root')
);
