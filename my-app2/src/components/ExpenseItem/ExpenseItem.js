import React, { useState } from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const changeClickHandeler = () => {
    setTitle("update");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={changeClickHandeler}>change Title</button>
    </Card>
  );
};

export default ExpenseItem;
