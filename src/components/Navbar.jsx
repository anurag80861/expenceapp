import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          Expense Tracker
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/Form" className="text-gray-300 hover:text-white">Form</Link>
          <Link to="/Task" className="text-gray-300 hover:text-white">Task</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;