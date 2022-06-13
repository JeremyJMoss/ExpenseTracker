import "./ExpenseDate.css";

function ExpenseDate(props){
    const createLocaleString = function(options){
        return props.date.toLocaleString(navigator.language, options);
    } 

    return (
        <div className="expense-date">
            <div className="expense-date__month">{createLocaleString({month: "long"})}</div>
            <div className="expense-date__year">{createLocaleString({year: "numeric"})}</div>
            <div className="expense-date__day">{createLocaleString({day: "2-digit"})}</div>
        </div>
    )
}

export default ExpenseDate;