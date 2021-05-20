import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css'

function Expenses(props) {
    const [filterValue, setfilterValue] = useState('2020');

    function onFilterValueSelectHandler(filterValue) {
        setfilterValue(filterValue)
        console.log(filterValue)
    }

    return (
        <div>
            <Card className="expenses">

                <ExpensesFilter selected={filterValue} onFilterValueSelect={onFilterValueSelectHandler}></ExpensesFilter>
                {props.items.map(itemsx =>
                    <ExpenseItem
                        title={itemsx.title}
                        amount={itemsx.amount}
                        date={itemsx.date}
                    />)}

            </Card>
        </div>
    );
}

export default Expenses;