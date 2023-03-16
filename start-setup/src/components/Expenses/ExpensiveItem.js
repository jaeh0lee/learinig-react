import React, {useState} from 'react'
import './ExpensiveItem.css'
import ExpensiveDate from './ExpensiveDate'
import Card from '../UI/Card'


const ExpensiveItem = ({title , amount, date}) => {

  const [타이틀, 타이틀변경] = useState(title)
  
  const onClickHanlder = () => {
    타이틀변경('hi')
   
  }

  return (
   
    <Card className='expense-item'>
        <ExpensiveDate date={date}/>
        <div className='expense-item__description'>
        <h2>{타이틀}</h2>
        <div className='expense-item__price'>{amount}</div>
        </div>
        <button onClick={onClickHanlder}>Change Title</button>
    </Card>
  
  ) 
}

export default ExpensiveItem