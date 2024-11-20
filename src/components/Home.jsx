import React from 'react';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to Expense Tracker</h1>
      <p className="text-lg mb-4">
        This application helps you keep track of your expenses. You can add new expenses, view all your expenses, and delete any expense you no longer need.
      </p>
      <p className="text-lg mb-4">
        Use the navigation links above to access different sections of the application:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="text-lg">Home: Overview of the application.</li>
        <li className="text-lg">Form: Add a new expense.</li>
        <li className="text-lg">Task: View and manage your stored expenses.</li>
      </ul>
      <p className="text-lg">
        Start by adding a new expense using the Form link. You can then view and manage all your expenses in the Task section.
      </p>
    </div>
  );
};

export default Home;