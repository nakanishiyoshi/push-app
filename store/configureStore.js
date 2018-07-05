import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';
import rootSaga from '../sagas';

const logger = createLogger();

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducers, // reducer
        initialState,
        applyMiddleware(sagaMiddleware, logger)
    );
    store.runSagaTask = () => {
        store.sagaTask = sagaMiddleware.run(rootSaga);
    };
    store.runSagaTask();

    return store;
}
