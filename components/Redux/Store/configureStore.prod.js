import { createStore, compose } from 'redux';
import PPSToolReducer from '../Reducers/PPSToolReducer'

const finalCreateStore = compose(
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(PPSToolReducer, initialState);
}