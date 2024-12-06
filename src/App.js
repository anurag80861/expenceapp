import './App.css';
import React, { useEffect, useReducer, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';
import { getExpensesFromBackend, setExpensesInBackend } from './service/localstorage';
import expenseReducer from './reducers/expenceReducer';

function App() {
  const [editIndex, setEditIndex] = useState(-1);
  const [expenses, dispatchExpenseAction] = useReducer(expenseReducer, null);
  useEffect(() => {
    getExpensesFromBackend().then(expensesVal => {
      dispatchExpenseAction({
        type: "FILL",
        payload: { expenses: expensesVal },
      });
    });
  }, []);

  useEffect(() => {
    if (expenses === null) {
      return; // data not loaded from the backend yet
    }
    setExpensesInBackend(expenses).then(() => console.log("Saved expenses successfully!"));
  }, [expenses]);

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="tab flex justify-around bg-blue-500 text- py-4 shadow-lg">
          <NavLink to="" className="px-4 py-2 hover:bg-blue-600 rounded">
            Add Expense
          </NavLink>
          <NavLink to="expenses" className="px-4 py-2 hover:bg-blue-600 rounded">
            View Expenses
          </NavLink>
        </nav>
        <Routes>
          <Route
            path=""
            element={
              <ExpenseFormPage
                editIndex={editIndex}
                setEditIndex={setEditIndex}
                expenses={expenses}
                dispatchExpenseAction={dispatchExpenseAction}
              />
            }
          ></Route>
          <Route
            path="expenses"
            element={
              <ExpenseListPage
                setEditIndex={setEditIndex}
                expenses={expenses}
                dispatchExpenseAction={dispatchExpenseAction}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
