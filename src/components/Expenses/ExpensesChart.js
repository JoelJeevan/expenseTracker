import Chart from '../Chart/Chart'

function ExpensesChart (props){
    const ChartDataPoints = [
        {key: 0, label: 'Jan' , value: 0},
        {key: 1, label: 'Feb' , value: 0},
        {key: 2, label: 'Mar' , value: 0},
        {key: 3, label: 'Apr' , value: 0},
        {key: 4, label: 'May' , value: 0},
        {key: 5, label: 'Jun' , value: 0},
        {key: 6, label: 'Jul' , value: 0},
        {key: 7, label: 'Aug' , value: 0},
        {key: 8, label: 'Sep' , value: 0},
        {key: 9, label: 'Oct' , value: 0},
        {key: 10, label: 'Nov' , value: 0},
        {key: 11, label: 'Dec' , value: 0}
    ]

    let maxValue = 0

    for (const month of props.filteredArray){
        if (month.date.getMonth().toString() >= 0){
            ChartDataPoints[month.date.getMonth().toString()].value += month.amount
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