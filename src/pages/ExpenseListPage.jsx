import React from 'react';
import ExpenseList from '../components/ExpenseList';
import { useNavigate } from 'react-router-dom';



const ExpenseListPage = ({ setEditIndex,expenses,setExpenses }) => {
    const navigate = useNavigate();


    const handleDeleteExpense = (ind) => {
        const UpdatedExpenses=expenses.filter((_,index)=> index !== ind)
        expenses.splice(ind, 1);
        setExpenses(UpdatedExpenses );
      
    };

    const handleEditExpense = (ind) => {
        setEditIndex(ind);
        navigate('/');
    };

    return (
        <>
            <h1>Expense List</h1>
            <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} onEditExpense={handleEditExpense} />
        </>
    );
};

export default ExpenseListPage;