import { createContext, useState, useEffect } from "react";
import { getExpensesFromBackend, setExpensesInBackend } from "../service/localstorage";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    const [editIndex, setEditIndex] = useState(-1);
    const [expenses, setExpenses] = useState([]);
    useEffect(() => {
        getExpensesFromBackend().then(expensesVal => setExpenses(expensesVal));
        return () => {
            console.log("effect-endded")
        }
    }, []);
    useEffect(() => {
        setExpensesInBackend(expenses).then(() => console.log());
        return () => {
            console.log("effect-endded")
        }
    }, [expenses]);

    return (
        <ExpenseContext.Provider value={{
            editIndex, setEditIndex, expenses, setExpenses
        }} >
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseContext;