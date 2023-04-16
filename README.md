# Expense Tracker

Expense Tracker is a simple React application that allows users to track their expenses. Users can view a list of existing expenses and add new expenses using a form.

## Components

The application is composed of the following key components:

- `App`: The root component of the application.
- `Expenses`: Responsible for rendering a list of individual expense items.
- `ExpenseItem`: Displays the details of an individual expense item (title, amount, date).
- `NewExpense`: Renders the form for adding a new expense.
- `ExpenseForm`: Contains the form fields for entering a new expense's details.

## Component Hierarchy

The schema below shows the hierarchical structure of the components and the flow of data between them:

## App Component

                  +-------------------------------------------------------+
                  |                          App                          |
                  |                                                       |
                  |  [expenses] (Array of expense objects)                |
                  |                                                       |
                  |  addExpenseHandler(expenseData) {                     |
                  |    // Logic to add new expense to the `expenses` list |
                  |  }                                                    |
                  |                                                       |
                  +-------------------+-----------------------------------+
                                      |
                                      | [expenses] [onAddExpense]
                                      v

## Expenses Component

                  +----------------------+-------------------------------+
                  |                   Expenses                          |
                  |                                                    |
                  |  [expenses] (Array of expense objects)             |
                  |  [onAddExpense] (Callback to handle new expenses)  |
                  |                                                    |
                  +------------+------------+------------+-------------+
                               |            |            |
                               | [title]    | [title]    | [title]
                               | [amount]   | [amount]   | [amount]
                               | [date]     | [date]     | [date]
                               v            v            v

ExpenseItem Components NewExpense Component

---

    +-------+            +-------+            +----------------------+
    | ExpenseItem |      | ExpenseItem |      |     NewExpense      |
    +-------+            +-------+            |                      |
     (title, amount,    (title, amount,      |  [onAddExpense]      |
      date)              date)               |                      |
                                             |  submitExpenseData() |
                                             |                      |
                                             +----------+-----------+
                                                        |
                                                        | [onSubmit]
                                                        v

## ExpenseForm Component

                  +----------------------+
                  |      ExpenseForm     |
                  |                      |
                  |  [onSubmit] (Callback |
                  |   to handle form     |
                  |   submission)        |
                  |                      |
                  +----------------------+

## Instructions

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the development server.
5. Open your web browser and go to `http://localhost:3000` to access the Expense Tracker application.
6. Use the form to add new expenses, and view the list of existing expenses.

## Contributing

If you'd like to contribute to this project, feel free to open a pull request or create an issue on GitHub.
