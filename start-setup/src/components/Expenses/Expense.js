import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = ({ item }) => {
  const [filterYear, setFilterYear] = useState("2020");

  // 상태 끌어올리기
  const filterChangeHanlder = (selectYear) => {
    setFilterYear(selectYear);
  };

  const filterExpenses = item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filterYear={filterYear}
          filterChangeHanlder={filterChangeHanlder}
        />
        <ExpensesChart expenses={filterExpenses} />
        <ExpensesList filterExpenses={filterExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
