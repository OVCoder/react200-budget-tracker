import {createStore} from 'redux';

function tempReducer (){
  return null;
}

const rootStore = createStore(
  tempReducer,
  window._REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__()
);    

export default rootStore;

