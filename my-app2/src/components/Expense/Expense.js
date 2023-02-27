import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import "./Expense.css";
import { ExpensesChart } from "./ExpensesChart/ExpensesChart";

const Expense = (props) => {
  const [defaultFilter, setDefaultFilter] = useState("2020");

  const FilterDateHandler = (filter) => {
    setDefaultFilter(filter);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === defaultFilter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          FilterDateHandler={FilterDateHandler}
          defaultFilter={defaultFilter}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
