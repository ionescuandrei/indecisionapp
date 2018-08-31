import React from 'react';
import ExepenseList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilter';

const ExpenseDashboardPage = ()=>(
    <div>      
        <ExpenseListFilters/>
        <ExepenseList/>
    </div>
)

export default ExpenseDashboardPage;