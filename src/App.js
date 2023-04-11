import ExpenseItem from "./components/ExpenseItem";

function App() {
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
  return (
    <div>
      <h2>Let's get started!</h2>

      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
