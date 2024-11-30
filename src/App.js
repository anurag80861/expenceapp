import './App.css';
import React, {useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';
import { getExpensesFromBackend, setExpensesInBackend } from './service/localstorage';


function App() {
  const [editIndex, setEditIndex] = useState(-1);
  const [expenses,setExpenses]=useState([]);
  const renderCount=useRef(0);
  useEffect(()=>{
    getExpensesFromBackend().then(expensesVal=>setExpenses(expensesVal));
  },[]);
  useEffect(() => {
   setExpensesInBackend(expenses).then(()=> console.log()); 
  }, [expenses])
  

   

  console.log("Reander count -", renderCount.current++)

  return (
    <BrowserRouter>
      <div className="App">
        <nav class="tab">
          <NavLink to="">Add Expense</NavLink>
          <NavLink to="expenses">View Expenses</NavLink>
        </nav>
        <Routes>
          <Route path='' element={<ExpenseFormPage editIndex={editIndex} setEditIndex={setEditIndex} expenses={expenses} setExpenses={setExpenses}/>}></Route>
          <Route path='expenses' element={<ExpenseListPage setEditIndex={setEditIndex} expenses={expenses} setExpenses={setExpenses}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;