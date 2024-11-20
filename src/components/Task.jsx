import React, { useState } from 'react';

function Task() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("expenses")) || []);
  console.log(data);

  function handleDelete(index) {
    const updatedData = data.filter((_, i) => i !== index);
    localStorage.setItem("expenses", JSON.stringify(updatedData));
    setData(updatedData);
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Stored Expenses</h1>
      {data.length > 0 ? (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Expense</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b  text-center">{item.expence}</td>
                <td className="py-2 px-4 border-b text-center">{item.date}</td>
                <td className="py-2 px-4 border-b text-center">{item.category}</td>
                <td className="py-2 px-4 border-b  text-center">{item.price}</td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-lg">No expenses stored.</p>
      )}
    </div>
  );
}

export default Task;