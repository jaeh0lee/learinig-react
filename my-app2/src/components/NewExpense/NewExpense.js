import { useState } from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditig, setUsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expendseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expendseData);
  };

  const startEditingHandler = () => {
    setUsEditing(true);
  };

  const stopEditingHandler = () => {
    setUsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditig && (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {isEditig && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
