import uuid from "uuid";
import database from "../firebase/firebase";

//ADD_EXPENSE
export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});

//use of redux thunk here.
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const { description = "", note = "", amount = 0, createdAt = 0 } = expenseData;
        const expense = { description, note, amount, createdAt };
        database.ref("expense").push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };

};

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id: id
});

export const startRemoveExpenses=({ id } = {})=>{
    return (dispatch)=>{
        database.ref(`expense/${id}`).remove().then(()=>{
            dispatch(removeExpense({ id }));
        });
    };
};

//EDIT_EXPENSE
export const editExpense = (id, update) => ({
    type: "EDIT_EXPENSE",
    id,
    update
})


export const startEditExpenses = (id, update) => {
    console.log(update);
    return (dispatch) => {
        database.ref(`expense/${id}`).update(update).then(() => {
            dispatch(editExpense(id, update));
        })
    }
};
//SET-Expenses by load data from firebase and set in store

export const setExpenses = (expenses) => ({
    type: "SET_EXPENSE",
    expenses

})

export const startSetExpenses = () => {
    
    return (dispatch) => {
        return database.ref('expense').once('value').then((snapshot) => {

            const expense = [];
            snapshot.forEach((childSnapshot) => {
                expense.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expense));
        });
    };
};