import Expenses from "./components/Expenses";

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
      <h2>Track your expenses</h2>

      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
