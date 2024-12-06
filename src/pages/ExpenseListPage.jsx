import React from "react";
import ExpenseList from "../components/ExpenseList";
import { useNavigate } from "react-router-dom";

const ExpenseListPage = ({ setEditIndex, expenses, dispatchExpenseAction }) => {
  const navigate = useNavigate();

  const handleDeleteExpense = (ind) => {
    dispatchExpenseAction({
      type: "DELETE",
      payload: { ind },
    });
  };

  const handleEditExpense = (ind) => {
    setEditIndex(ind);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-600">
          Expense List
        </h1>
        {expenses && expenses.length > 0 ? (
          <div className="space-y-4">
            {expenses.map((expense, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-md bg-gradient-to-br from-purple-200 to-indigo-300 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">{expense.title}</h2>
                    <p className="text-sm text-gray-600">
                      Amount: ${expense.amount}
                    </p>
                    <p className="text-sm text-gray-600">
                      Date: {expense.date}
                    </p>
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleEditExpense(index)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteExpense(index)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No expenses to show. Add some!
          </p>
        )}
      </div>
    </div>
  );
};

export default ExpenseListPage;
