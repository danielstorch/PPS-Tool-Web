import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import PPSToolReducer from '../Reducers/PPSToolReducer'
import DevTools from '../DevTools';

const finalCreateStore = compose(
  DevTools.instrument(),
  persistState()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(PPSToolReducer, initialState);
  return store;
}