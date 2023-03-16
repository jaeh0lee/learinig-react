import React from 'react'
import './ExpensiveItem.css'
import ExpensiveDate from './ExpensiveDate'
import Card from '../UI/Card'


const ExpensiveItem = ({title, amount, date}) => {

  return (
   
    <Card className='expense-item'>
        <ExpensiveDate date={date}/>
        <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{amount}</div>
        </div>
    </Card>
  
  ) 
}

export default ExpensiveItem