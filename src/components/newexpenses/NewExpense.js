import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
      {/* <NewExpense /> */}
    </div>
  );
};
export default NewExpense;
