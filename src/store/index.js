import { createStore} from 'redux';
import reducers from './ducks';

const store = createStore(reducers);

console.log(store.getState());

// Posso fazer um subscriber no store para monitorar
store.subscribe(() => {
    console.log('Uma ação foi disparada');
});

export default store;