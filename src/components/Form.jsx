import React, { useState } from 'react';

const Form = () => {
  const [expence, setExpence] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // In expencetrack all form data save 
    

   const expencetrack={expence,date,category,price};
   const existingData=JSON.parse(localStorage.getItem("expenses"))
   existingData.push(expencetrack)
   localStorage.setItem("expenses",JSON.stringify(existingData))
setCategory("")
setDate("")
setExpence("")
setPrice("")
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <h1 className='h-1 text-2xl flex justify-center'>Expence Tracker Form</h1><br />
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Expence:</label>
        <input
          type="text"
          value={expence}
          onChange={(e) => setExpence(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
        <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="select category">select category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shoping">Shoping</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </form>
  );
};

export default Form;