
import React, { Component } from 'react'
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




export  class ExpenseListItem extends Component {
    
   
  render() {
    return (
        
        <Link className="list-item" to={`/edit/${this.props.expenseItem.id}`}>
        <div>
       <h3 className="list-item__title">{this.props.expenseItem.description}</h3> 
       <span className="list-item__sub-title">{moment(this.props.expenseItem.createdAt).format("Do MMMM, YYYY")}</span>
        
        </div>
      
        <div>
        <h3 className="list-item__data">{numeral((this.props.expenseItem.amount)/100).format("$0,0.00")}</h3> 
        </div>   
        </Link>
           
          
    )
  }
}


/* <div className="list-item-action1">
         <button className="button-danger" onClick={this.removeExpense}> Remove </button>   
         </div> */


export default connect ()(ExpenseListItem);