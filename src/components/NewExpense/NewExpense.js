import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

function NewExpense (props){

    function NewExpenseHandler (enteredExpenseData){
        const enteredExpenseDataPlusKey = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(enteredExpenseDataPlusKey);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={NewExpenseHandler}></ExpenseForm>
        </div>
    )
}
export default NewExpense;