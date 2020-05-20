import React from 'react';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications'

import store from './src/state/store';
import ToastContainer from './src/components/ToastContainer';

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <ToastProvider components = {{ToastContainer}} placement='bottom-right'>
        {element}
      </ToastProvider>
    </Provider>
  );
}