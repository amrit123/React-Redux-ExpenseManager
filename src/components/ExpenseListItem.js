import React from "react";
import { Link} from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import { connect } from "react-redux";
import { startRemoveExpenses } from "../actions/expenseActions";
// load a locale
numeral.register('locale', 'no', {
  delimiters: {
      thousands: '.',
      decimal: ','
  },
  abbreviations: {
      thousand: 'k',
      million: 'm',
      billion: 'b',
      trillion: 't'
  },
  ordinal : function (number) {
      return number === 1 ? 'er' : 'ème';
  },
  currency: {
      symbol: 'NOK '
  }
});

numeral.locale('no');
 const ExpenseListItem=(props)=>(
    <div>
    <h1>Item desc</h1>
  <Link to={`/edit/${props.expenseItem.id}`}> {props.expenseItem.description}</Link>  
    <br/>
   Amount: {numeral((props.expenseItem.amount)/100).format("$0,0.00")}
    <br/>
   Created At: {moment(props.expenseItem.createdAt).format("Do MMMM, YYYY")}
   <br/>
   <button onClick={()=>{
    props.dispatch(startRemoveExpenses({ id:props.expenseItem.id }));
    //props.history.push("/");
}}> remove </button>
    </div>
 
);

export default connect ()(ExpenseListItem);