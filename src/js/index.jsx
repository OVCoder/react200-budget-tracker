import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import App from './app';
import store from './rootStore';

/*The Provider will provide the store to the connect() function
 using some of the more complex layers of React called the context.
 When the store changes the Provider component re-renders the entire application.*/
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
/* <App />, document.getElementById('root') */   
);
