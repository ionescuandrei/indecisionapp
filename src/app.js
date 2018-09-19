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
fetch('http://localhost:3001/api/expenses/')
.then((response)=>(response.json()))
.then((data)=>(data.forEach(element => {
  store.dispatch(addExpense(element))   
console.log(element);  
})));


const jsx = ( 
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
