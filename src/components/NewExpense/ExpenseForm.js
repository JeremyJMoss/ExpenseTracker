import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props){
    const [title, setEnteredTitle] = useState("");
    const [amount, setEnteredAmount] = useState("");
    const [date, setEnteredDate] = useState("");
    

    const inputChangeHandler = function(e, handler){
        handler(e.target.value);
    }

    const formSubmissionHandler = function(e){
        e.preventDefault();
        const expenseData = {
            title,
            amount,
            date : date !== "" ? new Date(date) : ""
        }
        if(!Object.values(expenseData).some(field => field === "")){
            props.onSaveExpense(expenseData);
            resetValues();
        }
    }

    const resetValues = function(){
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
        props.onCancel();
        }
    
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" 
                    value={title} 
                    onChange={(e) => inputChangeHandler(e, setEnteredTitle)}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" 
                    value={amount} 
                    onChange={(e) => inputChangeHandler(e, setEnteredAmount)} min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" 
                    value={date} 
                    min="2021-01-01" 
                    onChange={(e) => inputChangeHandler(e, setEnteredDate)}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" 
                onClick={resetValues}>Cancel</button>
                <button type="submit">Add Expense</button>         
            </div>
        </form>
    )
}

export default ExpenseForm;