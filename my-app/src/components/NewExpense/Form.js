import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //         enteredTitle : '',
  //         enteredAmount : '',
  //         enteredDate : ''
  //     })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({...userInput,
    //     enteredTitle : event.target.value})
    // setUserInput((prevState)=>{
    //     return {...prevState, enteredTitle : event.target.value}
    // })
  };

  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({...userInput,enteredAmount : event.target.value})
  };

  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({...userInput,enteredDate : event.target.value})
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      Amount: enteredAmount,
      Date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls"></div>
      <div className="new-expense__control">
        <label htmlFor="">Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label htmlFor="">Amount</label>
        <input
          type="number"
          value={enteredAmount}
          min="0.01"
          step="0.01"
          onChange={AmountChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label htmlFor="">Date</label>
        <input
          type="date"
          value={enteredDate}
          min="2021-02-27"
          max="2023-12-31"
          onChange={DateChangeHandler}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">click! </button>
      </div>
    </form>
  );
};

export default Form;
