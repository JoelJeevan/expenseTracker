import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

function ExpensesList (props){

    let conditionalContent = <h2 className='expenses-list__fallback'>No expenses were found for the filtered year.</h2>

    if (props.filteredArray.length > 0){
        conditionalContent = props.filteredArray.map(itemsx =>
            <ExpenseItem
                key={itemsx.id}
                title={itemsx.title}
                amount={itemsx.amount}
                date={itemsx.date}
            />)

    }

    return(
        <ul className='expenses-list'>
            {conditionalContent}
        </ul>
    )


}

export default ExpensesList;