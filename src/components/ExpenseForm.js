import React, { Component } from 'react'
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
const now=moment();
export default class ExpenseForm extends Component {
    constructor(props){
        super(props)
        this.state={
            description:props.expense ? props.expense.description:"",
            note:props.expense ? props.expense.note:"",
            amount:props.expense ? (props.expense.amount / 100).toString() : "",
            createdAt:props.expense ? moment(props.expense.createdAt):moment(),
            calenderFocused:false,
            error:""
        }
    }
    
    handleDescriptionChange=(e)=>{
        const description=e.target.value;
        this.setState(()=> ({description}) );
    }
    handleNoteChange=(e)=>{
        const note=e.target.value;
        this.setState(()=> ({note}) );
    }
    handleAmountChange=(e)=>{
        const amount=e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) // regular expression that match if the amount is valid or not.it allow only numbers upto 2 decimal points
        this.setState(()=> ({amount}) );
    }
    onDateChange=(createdAt)=>{ //onDateChange is called with moment object.i am calling it createdAt
        if(createdAt){
            this.setState(()=> ({createdAt}) );
        }
        
    }
    onFocusChange=({focused})=>{ 
        this.setState(()=> ({calenderFocused:focused}) );
    }
    onSubmit=(e)=>{
         e.preventDefault();
         if(!this.state.description || !this.state.amount){
             this.setState(()=>({error:"Please Enter Description and Amount"}));
         }else{
            this.setState(()=>({error:""}));
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount ,10)*100 , //parese the string value of amount and change into cents
                createdAt:this.state.createdAt.valueOf(),//convert time in miliseconds
                note:this.state.note
            });
           
         }
        
    }
  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error} </p> }
      <form onSubmit={this.onSubmit}>
      <input type="text" autoFocus placeholder="Expense Description" value={this.state.description} onChange={this.handleDescriptionChange}/> <br/>
      <input type="text" placeholder="Expense Amount"  value={this.state.amount} onChange={this.handleAmountChange}/> <br/>
      <SingleDatePicker
       date={this.state.createdAt}
       onDateChange={this.onDateChange}
       focused={this.state.calenderFocused}
       onFocusChange={this.onFocusChange}
       numberOfMonths={1} //will only show 1 month in the data picker. we can change it to any numeber
       isOutsideRange={()=> false} //will allow to pick past dates
  
/>  <br/>
      <textarea placeholder="Enter note for ypur expense(optional)" value={this.state.note} cols="30" rows="10" onChange={this.handleNoteChange}></textarea> <br/>
      <button>Add Expense</button>
     {/*for date picker we are using two library:moment js and airbnb react dates to pick date */}
      </form>
      </div>
    )
  }
}
