import './Chart.css'
import ChartBar from './ChartBar'

function Chart (props){
    return(
        <div className="chart">
            {props.datapoints.map(datapoint => <ChartBar
                key = {datapoint.key}
                label = {datapoint.label}
                value = {datapoint.value}
                maxValue = {props.maxValue} 
            ></ChartBar>)}
            
        </div>
    )
}

export default Chart