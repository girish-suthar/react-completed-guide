import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Expense from './components/Expense/Expense'
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id:'e1',
    title: 'Car Insurance1',
    amount: 291.96,
    date: new Date(2023, 2, 11)
  },
  {
    id:'e2',
    title: 'Car Insurance2',
    amount: 292.96,
    date: new Date(2022, 2, 12)
  },
  {
    id:'e3',
    title: 'Car Insurance3',
    amount: 293.96,
    date: new Date(2022, 2, 13)
  },
  { 
    id:'e4',
    title: 'Car Insurance4',
    amount: 294.96,
    date: new Date(2022, 2, 14)
  },
]
const App = () => {
 
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });

    // setExpenses([expense,...expenses]);
    console.log("App.js In :-" + expense.id);
  }
  // return (
  //   React.createElement('div',{},
  //     React.createElement('h2',{},"Let's Get Started!"),
  //     React.createElement(NewExpense,{onAddExpense:addExpenseHandler}),
  //     React.createElement(Expense,{items:expenses})
  //   )
  // );

  return (
    <div className='App'>
      <h2 className='heading'>Let's Get Started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}


export default App;
