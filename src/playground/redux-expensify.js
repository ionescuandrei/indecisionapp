import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
import { getCiphers } from 'crypto';

//ADD_EXPENSE
const addExpense=({description="", notes="", amount=0, createdAt=0}={})=>({
    type:"ADD_EXPENSE",
    expense:{
        id:uuid(),
        description,
        notes,
        amount,
        createdAt
    }
})
//REMOVE_EXPENSE
const removeExpense=({id=""}={})=>({
    type:"REMOVE_EXPENSE",
    id
})
//EDIT_EXPENSE
const editExpense=(id, updates)=>({
    type:"EDIT_EXPENSE",
    id,
    updates
})
//SET_TEXT_FILTER
const setText=(text="")=>({
    type:"SET_TEXT_FILTER",
    text
})
//SORT_BY_DATE
const sortByDate = ()=>({
    type:"SORT_BY_DATE",
})
//SORT_BY_AMOUNT
const sortByAmount= ()=>({
    type:"SORT_BY_AMOUNT"
}) 
//SET_START_DATE
const setStartDate=(startDate=undefined)=>({
    type:"SET_START_DATE",
    startDate
})
//SET_END_DATE
const setEndDate=(endDate=undefined)=>({
    type:"SET_END_DATE",
    endDate
})
//Expenses reducer
const expensesReducerDefault = [];
const expensesReducer=(state=expensesReducerDefault,action)=>{
switch (action.type){
    case "ADD_EXPENSE":
        return [...state, action.expense];
    case "REMOVE_EXPENSE":
        return state.filter(({id})=>( id!==action.id));
    case "EDIT_EXPENSE":
        return state.map((expense)=>{
            if(expense.id===action.id){
                return{
                    ...expense,
                    ...action.updates
                };
            }else{
                return expense;
            };
        });
    default:
    return state;
}
}
//Filter reducer
const filterReducerDefault={
    text:"",
    sortBy:"date",
    startDate:undefined,
    endDate:undefined
}
const filterReducer = (state=filterReducerDefault, action)=>{
    switch(action.type){
        case "SET_TEXT_FILTER":
            return {
                ...state, 
                text: action.text
                 };
        case "SORT_BY_DATE":
        return{
            ...state,
            sortBy:"date"
        }
        case "SORT_BY_DATE":
        return{
            ...state,
            sortBy:"amount"
        };
        case "SET_START_DATE":
        return {
            ...state,
            startDate: action.startDate
        }; 
        case "SET_END_DATE":
        return {
            ...state,
            endDate: action.endDate
        } 
        default:
        return state;
    }
}
//Get visible
const getVisibleExpenses =(expenses, {text ,sortBy, description, startDate, endDate})=>{
       return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !=='number'||expense.createdAt>=startDate;
        const endDateMatch=typeof startDate !=='number'||expense.createdAt<=endDate;
        const textMatch= expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch&&endDateMatch&&textMatch;
       }).sort((a,b)=>{
           if(sortBy=="date"){
           return a.createdAt<b.createdAt?1:-1;
           }
           if(sortBy=='amount'){
            return a.amount<b.amount?-1:1;
           }
       })    
    
}
//Store created
const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filterReducer
    })
)
store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})
const expenseOne=store.dispatch(addExpense({description:"Rent", notes:"MY LAST RENT", amount:200,createdAt:-21000}));
const expenseTwo=store.dispatch(addExpense({description:"Coffe", notes:"With milk", amount:100,createdAt:-1000}));
// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));
 //store.dispatch(setText("coffe"));
// store.dispatch(setText());
 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1325));
// store.dispatch(setEndDate());
const demoState={
    expenses:[{
        id:"abcd",
        description:"January rent",
        notes:"Last rent from that location",
        amount:54500,
        createdAt:0
    }],
    filters:{
        text:"rent",
        sortBy:"amount",//date or amount
        startDate:undefined,
        endDate:undefined
    }
}