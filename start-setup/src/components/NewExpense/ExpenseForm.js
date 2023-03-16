import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({onSaveExpenseData}) => {

const [title, setTitle] = useState("");
const [amount, setAmount] = useState("");
const [date, setDate] = useState("");

const titleChangeHanlder = (e) => {
   setTitle(e.target.value)
  
}

const amountChangeHanlder = (e) => {
  setAmount(e.target.value)
  
}


const dateChangeHanlder = (e) => {
    setDate(e.target.value)
    
}

const submitHandler = (e) => {
    e.preventDefault()
    const expenseData = {
        title : title,
        amount : amount,
        date : new Date(date)
    }
    setTitle('')
    setAmount('')
    setDate('')
    onSaveExpenseData(expenseData)

}

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
         <input type="text" 
         onChange={titleChangeHanlder}
         value={title}/>
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHanlder}
          value={amount} />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' 
             min='2019-01-01'
             max='2022-12-31'
          onChange={dateChangeHanlder}
          value={date}/>
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;