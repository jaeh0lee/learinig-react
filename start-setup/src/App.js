import Expense from "./components/Expenses/Expense"
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const addExpenseData = (expense) => {
    console.log(expense)
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseData} />
      <Expense />
    </div>
  );
}

export default App;
