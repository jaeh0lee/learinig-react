import React from 'react'

import './ExpensiveDate.css'


const ExpensiveDate = ({date}) => {

    const month = date.toLocaleString("ko-KR",{month : 'long'})
    const day = date.toLocaleString("ko-KR", {day : '2-digit'})
    const year = date.getFullYear()

  return (
    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year '>{year}</div>
        <div className='expense-date__day'>{day}</div>
    </div>
  )
}

export default ExpensiveDate