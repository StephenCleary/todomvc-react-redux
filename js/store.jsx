import { applyMiddleware, compose, createStore } from 'redux';
import immutableState from 'redux-immutable-state-invariant';
import reducers from './reducers';
import DevTools from './devTools';

// NOTE FOR PRODUCTION: the Redux immutable state invariant should not be used in production apps!
const middleware = applyMiddleware(immutableState());

// NOTE FOR PRODUCTION: DevTools should not be used in production apps!
const storeFactory = compose(middleware, DevTools.instrument())(createStore);

export default storeFactory(reducers);
