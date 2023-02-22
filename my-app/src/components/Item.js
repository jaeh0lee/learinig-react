import React from 'react'
import './item.css'

function Item() {
  const number  = 231.12;
  return (
    <div className='expense-item'>
     <div>Date</div>
     <div  className='expense-item__description' >
      <h2>{number}</h2>
      <div className='expense-item__price'>Amount</div>
     </div>
    </div>
  )
}

export default Item