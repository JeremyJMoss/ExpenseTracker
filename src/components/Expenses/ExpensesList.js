import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props){

    return (
    <ul className="expense-list">
        {props.items?.length !== 0 
            ? props.items?.map(expense => 
            <ExpenseItem 
            key={expense.id} 
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}
            />) 
            : <p className="expenses-list__fallback">Sorry no expense could be found for that year.</p>}
    </ul>)
}

export default ExpensesList;