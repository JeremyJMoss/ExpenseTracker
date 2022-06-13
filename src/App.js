import { useState } from "react";
import { formatCurrency , storeExpenseData } from "./components/Config/Helper";
import { INITIAL_STATE } from "./components/Config/Config";
import Expenses from "./components/Expenses/Expenses";
import ExpensesChart from "./components/Expenses/ExpensesChart";
import NewExpense from "./components/NewExpense/NewExpense";

function App(){

  const [expenses, setExpenses] = useState(INITIAL_STATE ?? "");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  function createExpense(enteredExpenseData){
    
    const newExpenseData = {
      ...enteredExpenseData,
      id: `el${expenses.length}`,
      amount: formatCurrency(enteredExpenseData.amount),
    }
    
    setExpenses(prevState => {
      const newExpensesArray = [newExpenseData, ...prevState];
      storeExpenseData(newExpensesArray);
      return newExpensesArray;
    });
    
  }

  return(
    <div>
      <NewExpense onCreateExpenseEntry={createExpense}/>
      <ExpensesChart year={selectedYear} items={expenses}/>
      <Expenses year={setSelectedYear} items={expenses} />
    </div>
  );
}

export default App;
