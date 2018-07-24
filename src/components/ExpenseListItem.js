import React from "react";
import { Link} from "react-router-dom";


 const ExpenseListItem=(props)=>(
    <div>
    <h1>Item desc</h1>
  <Link to={`/edit/${props.expenseItem.id}`}> {props.expenseItem.description}</Link>  
    <br/>
   Amount: {props.expenseItem.amount}
    <br/>
   Created At: {props.expenseItem.createdAt}
   <br/>
   
    </div>
 
);

export default ExpenseListItem;