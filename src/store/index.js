import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './ducks';
import root from './ducks/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(root);

// Posso fazer um subscriber no store para monitorar
store.subscribe(() => {
    console.log('Uma ação foi disparada');
});

export default store;