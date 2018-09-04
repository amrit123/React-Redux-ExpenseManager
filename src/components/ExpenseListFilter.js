import React, { Component } from 'react'
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filtersActions";
// this component provides input field where we can enter the filter text and will display expenses based on that filter text.



class ExpenseListFilter extends Component {
  state = {
    calenderFocused: null
  };


  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

  onSortChange = (e) => {
    
    const sortValue = e.target.value;
    
    if (sortValue === "amount") {
      console.log("sort by amount");
      this.props.dispatch(sortByAmount());
    } else if (sortValue === "date") {
      console.log("sort by date");
      this.props.dispatch(sortByDate());
    }
  }

  onTextChange = (e) => {
    this.props.dispatch(setTextFilter(e.target.value));
    //the dispatch will cahnge the state if the current store
  }

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              placeholder="search expenses"
              className="text-input"
              value={this.props.filters.text} 
              onChange={this.onTextChange} />
          </div>

          <div className="input-group__item">
            <select
            className="select"
              value={this.props.filters.sortBy}
              //this value is set as amount by default in  filter reducer. so by default the expense should sort by amount.
              onChange={this.onSortChange}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>

          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              startDateId={"start"}
              endDate={this.props.filters.endDate}
              endDateId={"end"}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            /></div>
        </div>



      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    filters: state.filters

  };
};
export default connect(mapStateToProps)(ExpenseListFilter); //this connect the components to the store.we can get the value of the current state using mapPropsToState function

