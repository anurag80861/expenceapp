import React from "react";

export const DateInput = ({ value, onChange }) => {
  return (
    
      <div className="mb-4 w-80 mx-auto ">
        <label className="block text-sm font-medium text-gray-800 mb-1">Date:</label>
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400"
        />
      </div>
      );
};

      export const AmountInput = ({value, onChange}) => {
  return (
      <div className="mb-4 w-80 mx-auto">
        <label className="block text-sm font-medium text-gray-800 mb-1">Amount:</label>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400"
        />
      </div>
      );
};

      export const TitleInput = ({value, onChange}) => {
  return (
      <div className="mb-4 w-80 mx-auto">
        <label className="block text-sm font-medium text-gray-800 mb-1">Title:</label>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400"
        />
      </div>
      );
};

      const categories = [
      "Entertainment",
      "Food",
      "Groceries",
      "Gift",
      "Apparel",
      "Self Care",
      "Donation",
      "Capital Expense",
      "Travel",
      "Repair",
      "Medical",
      "Miscellaneous",
      "Petrol",
      ];

      export const CategoryInput = ({selectedCategory, onChange}) => {
  return (
      <div className="mb-4 w-80 mx-auto">
        <label className="block text-sm font-medium text-gray-800 mb-1">Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400"
        >
          <option value="" disabled>
            Select a Category
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      );
};

      export const PaymentModeInput = ({selectedMode, onChange}) => {
  return (
      <div className="mb-4 w-80 mx-auto">
        <label className="block text-sm font-medium text-gray-800 mb-1">Payment Mode:</label>
        <select
          value={selectedMode}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400"
        >
          <option value="" disabled>
            Select Payment Mode
          </option>
          <option value="Cash">Cash</option>
          <option value="Digital">Digital</option>
        </select>
      </div>
      );
};

      export const BeneficiaryInput = ({selectedBeneficiary, onChange}) => {
  const beneficiaries = ["Self", "Family", "Friends", "Vehicle"];

      return (
      <div className="mb-4 w-80 mx-auto">
        <label className="block text-sm font-medium text-gray-800 mb-1">Beneficiary:</label>
        <select
          value={selectedBeneficiary}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400"
        >
          <option value="" disabled>
            Select Beneficiary
          </option>
          {beneficiaries.map((beneficiary) => (
            <option key={beneficiary} value={beneficiary}>
              {beneficiary}
            </option>
          ))}
        </select>
      </div>
      );
};

      export const TagsInput = ({value, onChange}) => {
  return (
      <div className="mb-4 w-80 mx-auto">
        <label className="block text-sm font-medium text-gray-800 mb-1">Tags:</label>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400"
        />
      </div>
    
  );
};
