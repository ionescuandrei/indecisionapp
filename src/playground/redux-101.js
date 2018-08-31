import {createStore} from 'redux';

//Reducers
//1.Reducers are pure functions
//2.Don't modify state and action
const countReducer =(state={ count:0 }, action) => {
    switch(action.type){
        case 'INCREMENT':
        return{
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return {
            count: state.count-action.decrementBy 
        };
        case 'RESET':
        return{
            count: 0
        }
        case 'SET':
        return{
            count:action.setBy
        }
        default:
        return state;
    }
    }
const incrementCount =({incrementBy=1}={})=>({
    type:"INCREMENT",
    incrementBy
});
const decrementCount=(({decrementBy=1}={})=>({
    type:"DECREMENT",
    decrementBy
}))
const setCount=({setBy}={})=>({
    type:"SET",
    setBy
})
const resetCount=()=>({
    type:"RESET"
   
})
const store = createStore(countReducer);



const unsuscribe = store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(incrementCount());
store.dispatch(setCount({setBy:20}))
store.dispatch(resetCount())
store.dispatch(decrementCount({decrementBy:21}));
