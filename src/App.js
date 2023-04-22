import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newexpenses/NewExpense";
const Dummy_Data = [
  {
    id: "e1",
    title: "Rent",
    amount: 1345,
    date: new Date(2020, 4, 9),
  },
  {
    id: "e2",
    title: "Insurance",
    amount: 134,
    date: new Date(2021, 9, 23),
  },
  {
    id: "e3",
    title: "Car Loan",
    amount: 412,
    date: new Date(2020, 4, 24),
  },
  {
    id: "e4",
    title: "Phone Bill",
    amount: 35,
    date: new Date(2023, 2, 11),
  },
  {
    id: "e5",
    title: "Subscriptions",
    amount: 45,
    date: new Date(2022, 5, 21),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Data);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    console.log(expense);
  };
  return (
    <div>
      <h2>Track your expenses</h2>

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
