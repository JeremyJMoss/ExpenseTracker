import {CURRENCY} from "./Config";

export function formatCurrency(num){
    return new Intl.NumberFormat(navigator.language, {style: "currency", currency: CURRENCY}).format(num);
}

export function storeExpenseData(expenseData){
    localStorage.setItem("expenseData", JSON.stringify(expenseData));
}

export function getExpenseData(){
    const storedExpenseData = localStorage.getItem("expenseData")
    const expenseData = JSON.parse(storedExpenseData);
    return expenseData ? expenseData.map(expense => {
        return {...expense, date: new Date(expense.date)}
    }) : null;
}


