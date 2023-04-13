// Expenses.js
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

function Expenses(props) {
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
