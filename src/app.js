import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import  {addExpense} from './actions/expenses';
import  { setText } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store=configureStore();

store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses, state.filters)
  
})

store.dispatch(addExpense({description:'Water Bill', notes:'Mounthly bill',amount:200, createdAt:1000}));
store.dispatch(addExpense({description:'Gas Bill', notes:'Anual bill',amount:100, createdAt:2000}));
store.dispatch(addExpense({description:'Rent', notes:'Mounthly bill',amount:5200, createdAt:3000}));

const jsx = ( 
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
