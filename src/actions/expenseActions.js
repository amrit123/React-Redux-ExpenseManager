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
        database.ref("expense").push(expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
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

//EDIT_EXPENSE
export const editExpense = (id, update) => ({
    type: "EDIT_EXPENSE",
    id,
    update
})