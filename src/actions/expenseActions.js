
import database from "../firebase/firebase";

//ADD_EXPENSE
export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});

//use of redux thunk here.
export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const userId=getState().auth.uid;
        const { description = "", note = "", amount = 0, createdAt = 0 } = expenseData;
        const expense = { description, note, amount, createdAt };
        database.ref(`users/${userId}/expenses`).push(expense).then((ref) => {
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
    return (dispatch,getState) => {
        const userId=getState().auth.uid;
        database.ref(`users/${userId}/expenses/${id}`).remove().then(()=>{
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
   
    return (dispatch,getState) => {
        const userId=getState().auth.uid;
        database.ref(`users/${userId}/expenses/${id}`).update(update).then(() => {
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
    
    return (dispatch,getState) => {
        const userId=getState().auth.uid;
        return database.ref(`users/${userId}/expenses`).once('value').then((snapshot) => {

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