// import logo from './logo.svg';
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import './App.css';
import Form from './components/Form.jsx';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Task from "./components/Task.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<Form/>} />
        <Route path="/Task" element={<Task/>} />
      </Routes>
    </div>  
  );
}

export default App;
