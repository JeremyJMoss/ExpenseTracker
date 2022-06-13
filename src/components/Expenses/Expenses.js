import { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card"

function Expenses(props){
  const [year, setYear] = useState(new Date().getFullYear());
  
  const changeOptionHandler = function(option){
    setYear(Number(option));
    props.year(Number(option));
  }

  const filteredExpenses = props.items ? props.items.filter(expense => expense.date.getFullYear() === year) : null;

  return (   
      <Card className="expenses">
        <ExpenseFilter selected={year} onChangeOption={changeOptionHandler}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
  );
}

export default Expenses;