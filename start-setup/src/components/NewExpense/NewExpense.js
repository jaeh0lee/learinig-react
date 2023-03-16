import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = ({onAddExpense}) => {

    const saveExpenseDataHanlder = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        onAddExpense(expenseData);

    }

  return (
    <div className='new-expense'>
        <ExpenseForm  onSaveExpenseData={saveExpenseDataHanlder}/>
    </div>
  )
}

export default NewExpense;


