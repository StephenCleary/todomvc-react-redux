import { createStore } from 'redux';
import reducers from './reducers';
import DevTools from './devTools';

// NOTE FOR PRODUCTION: DevTools should not be used in production apps!
export default createStore(reducers, DevTools.instrument());
