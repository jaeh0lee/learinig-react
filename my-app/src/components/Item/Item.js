import React from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";
import "./Item.css";

function Item(props) {
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate dating={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default Item;
