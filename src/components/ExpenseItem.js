import React from 'react';
import {removeExpense} from '../actions/expenses';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';

const ExpenseItem =({dispatch,id,description, note, amount, createdAt})=>(
    <div>
        <Link to={`/edit/${id}`}><h1>Description: {description}</h1></Link>
        
        <p>Note:{note}</p>
        <p>Amount:{amount}</p>
        <p>Created at:{moment(createdAt).format('D MMMM YYYY')}</p>
        <button onClick={()=>{
            dispatch(removeExpense({id}));
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseItem);