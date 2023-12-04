import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import { store, persistor } from './user_auth/store'; // Import your store and persistor


import App from './App'; // Your root component

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> {/* Wrap your app with PersistGate */}
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
