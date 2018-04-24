import {createStore} from 'redux';
import rootReducer from './rootReducer';

/* Here we are creating the store and attaching a middleware. By attaching
Redux DevTools as a middleware we will be able to see all the changes that pass through the Store.
// rootReducer is preloadedState (this argument is optional in Redux' createStore() )*/

const rootStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);    

export default rootStore;
