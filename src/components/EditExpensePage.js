import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense} from '../actions/expenses';

const EditExpensePage=(props)=>{
    console.log(props);
   return(<div>
       <ExpenseForm
      expense={props.expenses}
      onSubmit={(expense) => {
        props.dispatch(editExpense(props.expenses.id, expense));
        console.log(props.expenses.id)
        fetch('http://localhost:3001/api/expenses/'.concat(props.expenses.id),
        {
            method: 'put',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({
             ...expense
            })
        } )  
        props.history.push('/');
      }}
       />
    </div>)
}
const mapStateToProps=(state,props)=>{
    return{
        expenses:state.expenses.find((expense)=>(expense.id===props.match.params.id))
    }
}
export default connect(mapStateToProps)(EditExpensePage);