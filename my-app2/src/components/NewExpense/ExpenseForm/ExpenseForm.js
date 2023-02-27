import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // 한가지의 state로 여러개의 state를 관리하는법
  /*  const [userInput, setUserInput] = useState({
      enteredTitle = '',
      enteredAmount = '',
      enteredDate = '',
  });
  */

  /*
    setUserInput((prevState)=>{
      ...prevState, enteredTitle : event.target.value
    })
  */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /*setUserInput({
      ...userInput,
      enteredTitle : event.target.value
    })
    */
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /*setUserInput({
      ...userInput,
      enteredAmount : event.target.value
    })
    */
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /*setUserInput({
      ...userInput,
      enteredDate : event.target.value
    })
    */
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          cancel
        </button>
        <button type="submit">Add Expnese</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
