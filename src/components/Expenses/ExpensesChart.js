import Chart from '../Chart/Chart'

function ExpensesChart (props){
    const ChartDataPoints = [
        {label: 'Jan' , value: 0},
        {label: 'Feb' , value: 0},
        {label: 'Mar' , value: 0},
        {label: 'Apr' , value: 0},
        {label: 'May' , value: 0},
        {label: 'Jun' , value: 0},
        {label: 'Jul' , value: 0},
        {label: 'Aug' , value: 0},
        {label: 'Sep' , value: 0},
        {label: 'Oct' , value: 0},
        {label: 'Nov' , value: 0},
        {label: 'Dec' , value: 0}
    ]

    let maxValue = 0

    for (const month of props.filteredArray){
        if (month.date.getMonth().toString() >= 0){
            ChartDataPoints[month.date.getMonth().toString()].value += 1
        }
    }

    for (const i of ChartDataPoints){
        if (i.value > maxValue){
            maxValue = i.value
        }
    }

    return(
        <Chart datapoints={ChartDataPoints} maxValue={maxValue}></Chart>
    )
}

export default ExpensesChart