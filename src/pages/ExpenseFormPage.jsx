import React, { useContext } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { useNavigate } from 'react-router-dom';
import ExpenseContext from '../context/ExpensesContext';


const ExpenseFormPage = () => {
    const navigate = useNavigate();
    const { setEditIndex, expenses, setExpenses } = useContext(ExpenseContext)

    const handleSaveExpense = (expense, ind) => {
        const updatedExpenses = [...expenses];

        if (ind > -1) {
            updatedExpenses[ind] = expense;
        } else {
            updatedExpenses.push(expense);
        }
        setExpenses(updatedExpenses);
        setEditIndex(-1);
        navigate('/expenses')
    };

    return (
        <>
            <h1>Daily Expense Tracker</h1>
            <ExpenseForm onSaveExpense={handleSaveExpense} />
        </>
    );
};

export default ExpenseFormPage;