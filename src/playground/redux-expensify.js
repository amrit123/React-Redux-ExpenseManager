import { createStore,combineReducers } from "redux";
import uuid from "uuid";

//Actions needed
//ADD_EXPENSE
const addExpense=({ description="",note="",amount=0, createdAt=0}={})=>({
 type:"ADD_EXPENSE",
 expense:{
     id:uuid(),
     description,
     note,
     amount,
     createdAt


 }

});
//REMOVE_EXPENSE
const removeExpense=({id}={})=>({
type:"REMOVE_EXPENSE",
id:id
});
//EDIT_EXPENSE
const editExpense=(id,update)=>({
    type:"EDIT_EXPENSE",
    id,
    update
})
//SET-TEXT-FILTER
const setTextFilter=(text="")=>({
type:"SET_TEXT_FILTER",
text
});
//SORT-BY-DATE
const sortByDate=()=>({
    type:"SORT_BY_DATE",
    });
//SORT_BY_AMOUNT
const sortByAmount=()=>({
    type:"SORT_BY_Amount"
   
    });
//SET-START-DATE
const setStartDate=(startDate)=>({
    type:"SET_START_DATE",
    startDate
    });

//SET_END_DATE
const setEndDate=(endDate)=>({
    type:"SET_END_DATE",
    endDate
    });

//expense reducers
const expenseReducerDefault=[];
const expenseReducer=(state=expenseReducerDefault,action)=>{
    switch(action.type){
        case "ADD_EXPENSE":
       return [
           ...state,
           action.expense
       ]
       case "REMOVE_EXPENSE":
     return state.filter((expense)=>(expense.id!==action.id))
     
         case "EDIT_EXPENSE":
         return state.map((expense)=>{
         if(expense.id===action.id){
             return {
                 ...expense,
                 ...action.update
             }

         }else{
             return expense;
         }
         })
        default:
        return state
    }

}
//filter reducer
const filterReducerDefault={
    text:"",
    sortBy:"amount",//or date
    startDate:undefined,
    endDate:undefined
};
const filterReducer=(state=filterReducerDefault,action)=>{
    switch(action.type){
        case "SET_TEXT_FILTER":
        return{
            ...state,
            text:action.text
        }
        case "SORT_BY_DATE":
        return{
            ...state,
            sortBy:"date"
        }
        case "SORT_BY_AMOUNT":
        return{
            ...state,
            sortBy:"amount"
        }
        case "SET_START_DATE":
        return{
            ...state,
            startDate:action.startDate
        }
        case "SET_END_DATE":
        return{
            ...state,
            endDate:action.endDate
        }

        default:
        return state
    }

}

const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDatematch= typeof startDate!="number" || expense.createdAt>=startDate;
        const endDateMatch= typeof endDate!="number" || expense.createdAt<=endDate;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());

        return startDatematch && endDateMatch && textMatch;

    }).sort((a,b)=>{
        if(sortBy==="date"){
            return a.createdAt<b.createdAt ? 1 : -1;     
           }
           else if(sortBy=="amount"){
               return a.amount < b.amount ? 1: -1;

           }

    });
}


const rootReducers= combineReducers({
expenses:expenseReducer,
filters:filterReducer
});
//create store
const store=createStore(rootReducers);
store.subscribe(() => {
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
})
 const expense1=store.dispatch(addExpense({description:"Rent",amount:500,createdAt: -5000}));
const expense2=store.dispatch(addExpense({description:"loan",amount:1500,createdAt: -1000}));
//store.dispatch(removeExpense({id:expense1.expense.id}));
//store.dispatch(editExpense(expense2.expense.id,{amount:1000}));
//store.dispatch(setTextFilter("loan"));
//store.dispatch(setTextFilter());
//store.dispatch(sortByAmount());
store.dispatch(sortByDate()); 
//store.dispatch(setStartDate(125));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));



const demoState={
    expenses:[{
        id:"dfggffdhdf",
        description:"january rent",
        note:"january rent all clear",
        amount:5000,
        createdAt:0

    }],
    filters:{
        text:"rent",
        sortBy:"amount",//or date
        startDate:undefined,
        endDate:undefined
    }
}
    

