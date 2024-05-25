import React from 'react';
import logo from './logo.svg';
import './App.css';
import Expense from './components/Expense/Expense'
import NewExpense from '../../NewExpense/NewExpense';


const App = () => {
  const expenses = [
    {
      title: 'Car Insurance1',
      amount: 291.96,
      date: new Date(2021, 2, 11)
    },
    {
      title: 'Car Insurance2',
      amount: 292.96,
      date: new Date(2021, 2, 12)
    },
    {
      title: 'Car Insurance3',
      amount: 293.96,
      date: new Date(2021, 2, 13)
    },
    {
      title: 'Car Insurance4',
      amount: 294.96,
      date: new Date(2021, 2, 14)
    },
  ]
  return (
    React.createElement('div',{},
      React.createElement('h2',{},"Let's Get Started!"),
      React.createElement(NewExpense,{}),
      React.createElement(Expense,{items:expenses})
    )
  );

  // return (
  //   <div className='App'>
  //     <h2 className='heading'>Let's Get Started!</h2>
  //       <Expense items={expenses}/>
  //   </div>
  // );
}


export default App;
