import moment from 'moment';
const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true; // eg:let say our start date is 1st july and created date is 15 july then 1 july 2018 is sameordefore 15 july 2018 will give true. all the date after 1st july will give true.
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;

    }).sort((a,b)=>{
        if(sortBy==="date"){
            return a.createdAt<b.createdAt ? 1 : -1;     
           }
           else if(sortBy=="amount"){
               return a.amount < b.amount ? 1: -1;

           }

    });
}
export default getVisibleExpenses;