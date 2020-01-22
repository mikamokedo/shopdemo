import rootReducer from '../reducer/index';
import {createStore,compose,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../reduxSaga/index'

let composeEnhancers = null;
if (process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
    composeEnhancers = compose;
}


const sagaMiddleware = createSagaMiddleware()

const configStore = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default configStore;