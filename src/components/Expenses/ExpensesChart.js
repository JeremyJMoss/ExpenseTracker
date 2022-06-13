import { DATAPOINTLABELS} from "../Config/Config";

import Chart from "../Chart/Chart"

function ExpensesChart(props){
    
    const filteredExpenses = props.items.filter(item => item.date.getFullYear() === props.year);

    const dataPoints = DATAPOINTLABELS.map(label => {
        return {label, value: 0};
    })

    filteredExpenses.forEach(expense => {
        const expenseMonth = expense.date.getMonth();
        dataPoints[expenseMonth].value += +expense.amount.replace(/[^\d.]/g, "")
    })

    return <Chart dataPoints={dataPoints}/>;
}

export default ExpensesChart;