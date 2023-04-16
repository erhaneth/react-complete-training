import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newexpenses/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Rent",
      amount: 345,
      date: new Date(2023, 4, 9),
    },
    {
      id: "e2",
      title: "Insurance",
      amount: 34,
      date: new Date(2023, 4, 23),
    },
    {
      id: "e3",
      title: "Phone",
      amount: 35,
      date: new Date(2023, 6, 21),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log("in the app.js");
    console.log(expense);
  };
  return (
    <div>
      <h2>Track your expenses</h2>

      <Expenses expenses={expenses} />
      <NewExpense onAddExpense={addExpenseHandler} />
    </div>
  );
};

export default App;
