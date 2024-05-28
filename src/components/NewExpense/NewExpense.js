import React from 'react'
import './NewExpense.css'
import ExpenseFrom from './ExpenseFrom'

function NewExpense(props) {

  const saveExpenseDataHandler= (enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id : Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log("newexpenseData:"+expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense
