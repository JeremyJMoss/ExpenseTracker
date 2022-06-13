import { useState } from "react";
import "./NewExpense.css";
import Card from "../UI/Card"
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){
    const [formClosed, setFormClosed] = useState(true);

    function expenseSaveHandler(enteredExpenseData){
        props.onCreateExpenseEntry(enteredExpenseData);
    };

    function toggleForm(){
        setFormClosed(!formClosed);
    }
    return (
        <Card className="new-expense">
            {formClosed 
            ? <button onClick={toggleForm} >Add Expense</button>
            : <ExpenseForm onSaveExpense={expenseSaveHandler} onCancel={toggleForm}/>}
        </Card>
    );
};

export default NewExpense;