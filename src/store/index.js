import { createStore } from 'redux';
import { reducers } from '../reducers/reducers';

const store = createStore(reducers);


/*function handleChange(){
  alert('DONE');
};

let unsubscribe = store.subscribe(handleChange);
unsubscribe();*/

export { store };
