import React, { useContext } from 'react';
import ExpenseList from '../components/ExpenseList';
import { useNavigate } from 'react-router-dom';
import ExpenseContext from '../context/ExpensesContext';

const ExpenseListPage = () => {
    const navigate = useNavigate();
    const { setEditIndex, expenses, setExpenses } = useContext(ExpenseContext)
    const handleDeleteExpense = (ind) => {
        const UpdatedExpenses = expenses.filter((_, index) => {
            return index !== ind
        })
        setExpenses(UpdatedExpenses);

    };

    const handleEditExpense = (ind) => {
        setEditIndex(ind);
        navigate('/');
    };

    return (
        <>
            <h1>Expense List</h1>
            <ExpenseList onDeleteExpense={handleDeleteExpense} onEditExpense={handleEditExpense} />
        </>
    );
};

export default ExpenseListPage;