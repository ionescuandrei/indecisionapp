import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test("should setup remove expense", ()=>{
    const removeExp=removeExpense({id:"12345"});
    expect(removeExp).toEqual({
        id:"12345",
        type:"REMOVE_EXPENSE"
    });
});
test("should setup edit expense", ()=>{
    const editExp=editExpense("1234", {note:"new value for note",description:"newu value for descriptio", amount:"21"});
    expect(editExp).toEqual({
        id:"1234",
        type:"EDIT_EXPENSE",
        updates:{
            note:"new value for note",
            description:"newu value for descriptio", 
            amount:"21"}

    })
})
test("should setup add expense action object with provided values", ()=>{
    const expenseDate={        
        description:"Hamburger",
        notes:"Notes about hamburger",
        amount:21,
        createdAt:1222
    }
    const action = addExpense(expenseDate);
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{
            ...expenseDate,
            id:expect.any(String)
        }
    })
})
test("should setup add expense action object with default values", ()=>{
    const action=addExpense();
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{
            description:"",
            notes:"",
            amount:0,
            createdAt:0,
            id:expect.any(String)
        }
    })
})