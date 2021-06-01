import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

function NewExpense(props) {
    var [newItemButtonClicked, setNewItemButtonClicked] = useState(false)

    function NewExpenseHandler(enteredExpenseData) {
        const enteredExpenseDataPlusKey = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(enteredExpenseDataPlusKey);
    }

    function NewItemButtonClickedHandler() {
        setNewItemButtonClicked(true)
    }

    function cancelButtonClicked() {
        setNewItemButtonClicked(false)
    }

    return (
        <div className="new-expense">
            {!newItemButtonClicked && <button onClick={NewItemButtonClickedHandler}>Add New Expense</button>}
            {newItemButtonClicked &&<ExpenseForm onSaveExpenseData={NewExpenseHandler} cancleButtonClicked={cancelButtonClicked}></ExpenseForm>}
        </div>
    )




}
export default NewExpense;