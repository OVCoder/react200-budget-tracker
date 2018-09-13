import {createStore} from 'redux';
import rootReducer from './rootReducer';

/* Here we are creating the store and attaching a middleware. By attaching
 Redux DevTools as a middleware we will be able to see all the changes that pass through the Store.
 rootReducer is a reducer (a reducing function that returns the next state tree, given the current
state tree and an action to handle.)
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  - this is [enhancer], optional function,
 which allows to enhance the store with third-party capabilities such as middleware
 */

const rootStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);    

export default rootStore;
