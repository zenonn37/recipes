import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import coreReducer from './reducer'


const middleware = [thunk]

const store = createStore(
    coreReducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;