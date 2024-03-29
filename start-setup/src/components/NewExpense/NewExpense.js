import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = ({onAddExpense}) => {

  const [isEditing, setIsEditing] = useState(false);


  const saveExpenseDataHanlder = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        onAddExpense(expenseData);
        setIsEditing(false)
    }

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler =() => {
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add click Button</button>}
       {isEditing &&  <ExpenseForm  
       onSaveExpenseData={saveExpenseDataHanlder}
       stopEditingHandler={stopEditingHandler}
       />}
    </div>
  )
}

export default NewExpense;


