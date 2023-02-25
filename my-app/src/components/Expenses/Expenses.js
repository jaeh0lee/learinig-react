import Item from "../Item/Item";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, SetfilteredYear] = useState("2020");
  const filterHandler = (selectedYear) => {
    SetfilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFileter={filterHandler}
        />

        {props.items.map((expense) => (
          <Item
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
