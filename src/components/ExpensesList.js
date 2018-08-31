import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from './ExpenseItem';
import selectExpenses from '../selectors/expenses';

const ExpensesList =(props)=>(
    <div>
        <h1>Expenses List</h1>
        {props.expenses.map((expense)=>(           
                <ExpenseItem 
                {...expense}
                key={expense.id}
                />
            )
        )}
    </div>
);
const mapStateToProps=(state)=>{
    
    return{
        expenses: selectExpenses(state.expenses,state.filters)
    }
}
export default connect(mapStateToProps)(ExpensesList);
