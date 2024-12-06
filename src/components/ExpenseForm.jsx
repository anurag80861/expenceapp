import React, { useState } from 'react';
import { DateInput, AmountInput, TitleInput, CategoryInput, PaymentModeInput,  BeneficiaryInput, TagsInput } from './Inputs';
import { getExpenses } from '../service/localstorage';

const emptyForm = () => ({
  date: new Date().toISOString().split('T')[0],
  amount: '',
  title: '',
  category: '',
  newCategory: '',
  paymentMode: 'Cash',
  
  beneficiary: 'Self',
  tags: '',
});

function formValuesFromLocalStorage(ind,expenses) {
  
  const expense = expenses[ind];
  const formValues = {
    ...expense,
    newCategory: '',  // TODO: fix later
    tags: expense.tags?.join ? expense.tags.join(',') : expense.tags,
  };
  return formValues;
}

const ExpenseForm = ({ onSaveExpense, editIndex,expenses }) => {
  const prefilledForm = editIndex > -1 ? formValuesFromLocalStorage(editIndex,expenses) : emptyForm();
  const [formValues, setFormValues] = useState(prefilledForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      ...formValues,
      amount: +formValues.amount,
      category: formValues.category || formValues.newCategory,
      newCategory: undefined,
      tags: formValues.tags?.split(','),
    };
    onSaveExpense(expense, editIndex);
    setFormValues(emptyForm());
  };

  const [date, setDate] = [formValues.date, (val) => setFormValues((state) => ({...state, date: val}))]
  const [amount, setAmount] = [formValues.amount, (val) => setFormValues((state) => ({...state, amount: val}))]
  const [title, setTitle] = [formValues.title, (val) => setFormValues((state) => ({...state, title: val}))]
  const [category, setCategory] = [formValues.category, (val) => setFormValues((state) => ({...state, category: val}))]
  const [newCategory, setNewCategory] = [formValues.newCategory, (val) => setFormValues((state) => ({...state, newCategory: val}))]
  const [paymentMode, setPaymentMode] = [formValues.paymentMode, (val) => setFormValues((state) => ({...state, paymentMode: val}))]
  
  const [beneficiary, setBeneficiary] = [formValues.beneficiary, (val) => setFormValues((state) => ({...state, beneficiary: val}))]
  const [tags, setTags] = [formValues.tags, (val) => setFormValues((state) => ({...state, tags: val}))]

  const submitButtonText = editIndex > -1 ? "Edit Expense" : "Add Expense";

  return (
    <form onSubmit={handleSubmit} className='w-full h-full bg-purple-800'>
      <DateInput value={date} onChange={setDate} />
      <AmountInput value={amount} onChange={setAmount} />
      <TitleInput value={title} onChange={setTitle} />
      <CategoryInput selectedCategory={category} onChange={setCategory} newCategory={newCategory} onNewCategoryChange={setNewCategory} />
      <PaymentModeInput selectedMode={paymentMode} onChange={setPaymentMode} />
     
      <BeneficiaryInput selectedBeneficiary={beneficiary} onChange={setBeneficiary} />
      <TagsInput value={tags} onChange={setTags} />
      <button type="submit">{submitButtonText}</button>
    </form>
  );
};

export default ExpenseForm;