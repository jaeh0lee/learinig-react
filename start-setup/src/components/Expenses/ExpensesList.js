import React from 'react'
import ExpensiveItem from './ExpensiveItem'
import './ExpensesList.css'

const ExpensesList = ({filterExpenses}) => {
 
  if(filterExpenses.length === 0){
    return <h2 className='expenses-list__fallback '>fuck</h2>
  }
  return (
    <ul className='expenses-list'>
     {filterExpenses.map((expense) => (
      <ExpensiveItem  
      key={expense.id}
      title={expense.title} 
      amount={expense.amount}
      date={expense.date}
      /> 
      ))} 
    </ul>
  )
}

export default ExpensesList