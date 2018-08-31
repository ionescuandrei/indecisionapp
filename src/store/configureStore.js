import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import {createStore, combineReducers} from 'redux';

export default ()=>{
//Store created
const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filterReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
return store;
};
