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