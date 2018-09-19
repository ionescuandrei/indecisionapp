import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

const AddExpensePage=(props)=>(
    <div>
        
            <h1>Add expense</h1>
            <ExpenseForm
            onSubmit={(expense)=>{
                props.dispatch(addExpense(expense));  
                fetch('http://localhost:3001/api/expenses',
                {
                    method: 'post',
                    headers: {'Content-Type':'application/json'},
                    body:JSON.stringify({
                     ...expense
                    })
                } )       
                props.history.push("/");
            }}
            />
        
    </div>
)

export default connect()(AddExpensePage);