import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css'

function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2020');
     //const [filterArray, setFilterArray] = useState();
   

    function onFilterValueSelectHandler(selectedFilterValue) {
        setFilterYear(selectedFilterValue)
    }

    const  initialArray = props.items.filter(year => year.date.getFullYear().toString() === filterYear)

    return (
        <div>
            <Card className="expenses">

                <ExpensesFilter selected={filterYear} onFilterValueSelect={onFilterValueSelectHandler}></ExpensesFilter>
                
                {initialArray.map(itemsx =>
                    <ExpenseItem
                        key={itemsx.id}
                        title={itemsx.title}
                        amount={itemsx.amount}
                        date={itemsx.date}
                    />)}

            </Card>
        </div>
    );
}

export default Expenses;