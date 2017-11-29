import { createStore, applyMiddleware } from 'redux';
import rootReducer from './index.js';

export default function configureStore() {
  return createStore(rootReducer);
}
