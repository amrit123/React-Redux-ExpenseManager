export default (expenses)=>{

    const expenseArr=expenses.map(expense=>expense.amount); //extract expense from each obj and save it to an array
     return expenseArr.reduce((acc,total)=>acc+total ,0)
}
