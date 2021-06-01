import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import Card from '../UI/Card';
import './Expenses.css'

function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2020');
    const FilteredArray = props.items.filter(year => year.date.getFullYear().toString() === filterYear)

    function onFilterValueSelectHandler(selectedFilterValue) {
        setFilterYear(selectedFilterValue)
    }

    return (
        <div>
            <Card className="expenses">

                <ExpensesFilter selected={filterYear} onFilterValueSelect={onFilterValueSelectHandler}></ExpensesFilter>
                <ExpensesChart filteredArray={FilteredArray}> </ExpensesChart>
                <ExpensesList filteredArray={FilteredArray}></ExpensesList>

            </Card>
        </div>
    );
}

export default Expenses;